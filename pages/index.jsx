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

export async function getStaticProps() {
  return {
    props: { productProps: products }, // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1000, // In seconds
  };
}
