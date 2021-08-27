import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.HeaderMainContainer}>
      <div className={styles.HeaderTopContainer}>
        <div className={styles.HeaderTopLogo}>
          <Image src="/static/amazon_PNG_LOGO.png" layout="fill" objectFit="contain" alt="amazon logo" />
        </div>
      </div>
      <div className={styles.HeaderBottom}>
        Header Bottom
      </div>
    </header>
  );
}
