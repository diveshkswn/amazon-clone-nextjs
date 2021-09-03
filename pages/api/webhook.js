import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Secure a connection to firebase.
const serviceAccount = require('../../serviceAccountKey.json');

const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
}) : admin.app();

const endPointSecret = process.env.STRIPE_SIGNING_SECRET;

async function fulfillOrder(session) {
  // console.log('Fulfilling order', session);

  return app.firestore().collection('users').doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      title: JSON.parse(session.metadata.title),
      qty: session.metadata.qty,
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success : Order ${session.id} saved to db`);
    });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const signature = req.headers['stripe-signature'];

    let event;
    // Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, signature, endPointSecret);
    } catch (e) {
      console.log(e.message);
      return res.status(400).send(`Webhook error ${e.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Fullfill the order

      return fulfillOrder(session).then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error : ${err.message}`));
    }
  }
  return null;
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
