import Homepage from '../components/Homepage';
import styles from '../styles/Home.module.css';
import { products } from '../data/products';

export default function Home({ productProps }) {
  return (
    <div className={styles.container}>

      <Homepage productList={productProps} />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: { bannerProps: bannerData }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps() {
  return {
    props: { productProps: products }, // will be passed to the page component as props
  };
}
