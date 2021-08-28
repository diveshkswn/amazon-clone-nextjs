import styles from '../styles/Homepage.module.css';
import Banner from './Banner';

export default function Homepage() {
  return (
    <main className={styles.HomepageMainContainer}>
      <div className={styles.HomepageBanner}>
        <Banner />
      </div>
      <div className={styles.HomepageProductList}>
        {/* ProductList */}
      </div>
    </main>
  );
}
