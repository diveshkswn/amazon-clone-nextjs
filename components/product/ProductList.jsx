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
        price={parseFloat(product.price * 42).toFixed(2)} // Converting $ to rupee.
      />
    );
  }

  return (
    <>
      <div className={styles.ProductListMainContainer}>
        {productList.slice(0, 4).map(populateProducts)}
      </div>
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
