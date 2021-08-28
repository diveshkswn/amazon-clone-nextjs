import Homepage from '../components/Homepage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Homepage />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: { bannerProps: bannerData }, // will be passed to the page component as props
//   };
// }
