const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // getting email and items in cart from req body
  const { email, items } = req.body;

  res.status(200).json({ email, items });
}
