import { products } from '../../../data/products';

export default function getProductsById(req, res) {
  const { id } = req.query;

  const filteredProduct = products.filter((product) => product.id === Number(id));

  res.status(200).json(filteredProduct);
}
