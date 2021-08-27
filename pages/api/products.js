import { products } from '../../data/products';

export default function getAllProducts(req, res) {
  res.status(200).json(products);
}
