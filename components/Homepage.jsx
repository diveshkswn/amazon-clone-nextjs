import styles from '../styles/Homepage.module.css';
import Banner from './Banner';
import ProductList from './product/ProductList';

export default function Homepage({ productList }) {
  return (
    <main className={styles.HomepageMainContainer}>
      <div className={styles.HomepageBanner}>
        <Banner />
      </div>
      <div className={styles.HomepageProductList}>
        {/* ProductList */}
        <ProductList productList={productList} />
      </div>
    </main>
  );
}
