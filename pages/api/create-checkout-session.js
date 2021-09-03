/* eslint-disable max-len */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // getting email and items in cart from req body
  const { email, items } = req.body;

  // change Items as per stripe wants it.
  const transformedItems = items.map((item) => ({
    quantity: item.qty,
    description: item.description,
    price_data: {
      currency: 'inr',
      unit_amount: item.price * 100,
      product_data: { name: item.title, images: [item.imageURL] },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: { allowed_countries: ['GB', 'US', 'CA', 'IN'] },
    line_items: transformedItems,
    mode: 'payment',
    shipping_rates: ['shr_1JU6IXSAojnrOcUVtKAE2ps2'],
    success_url: `${req.headers.origin}/success?orderToken=${'jwt_kajdakjd'}`,
    cancel_url: `${req.headers.origin}/cancelled`,
    metadata: {
      email,
      title: JSON.stringify(items.map((item) => item.title)),
      qty: items.length,
      images: JSON.stringify(items.map((item) => item.imageURL)),
    },
    // title: JSON.stringify(items.map((item) => item.title)),
  });

  res.status(200).json({ id: session.id });
}
