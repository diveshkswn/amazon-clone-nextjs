import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/ProductList.module.css';
import ProductCard from './ProductCard';

export default function ProductList({ productList }) {
  function populateProducts(product) {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageURL={product.image}
        description={product.description}
        category={product.category}
        price={parseInt(product.price * 42, 10)} // Converting $ to rupee.
      />
    );
  }

  return (
    <>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <div className={styles.ProductListMainContainer}>
          {productList.slice(0, 4).map(populateProducts)}
        </div>
      </motion.div>
      <div className={styles.AmazonAd}>
        <Image src="/static/ad/amazon_ad2.jpg" layout="fill" objectFit="contain" alt="AD1" />
      </div>
      <div className={styles.ProductListMainContainer}>
        {productList.slice(5, 9).map(populateProducts)}
      </div>
      <div className={styles.AmazonAd}>
        <Image src="/static/ad/amazon_ad.jpg" layout="fill" objectFit="contain" alt="AD" />
      </div>
      <div className={styles.ProductListMainContainer}>
        {productList.slice(10).map(populateProducts)}
      </div>
    </>
  );
}
