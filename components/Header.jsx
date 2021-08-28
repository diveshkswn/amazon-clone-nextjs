import Image from 'next/image';
import { BiSearchAlt2, BiCart } from 'react-icons/bi';
import styles from '../styles/Header.module.css';
import { bottomHeaderData } from '../data/bottomHeaderData';

export default function Header() {
  function populateHeaderBottom(data) {
    return (
      <p key={data.id}>{data.name}</p>
    );
  }

  return (
    <header className={styles.HeaderMainContainer}>
      <div className={styles.HeaderTopContainer}>
        {/* LOGO */}
        <div className={styles.HeaderTopLogo}>
          <Image src="/static/amazon_PNG_LOGO.png" layout="fill" objectFit="contain" alt="amazon logo" />
        </div>
        {/* Search Bar */}
        <div className={styles.HeaderSearchBar}>
          <input type="text" className={styles.SearchInput} />
          <div className={styles.SearchIcon}>
            <BiSearchAlt2 size={25} />
          </div>
        </div>

        {/* User and Order Details */}

        <div className={styles.HeaderUserAndOrderDetails}>
          <div className={styles.HeaderUserDetails}>
            <p>Hello Divesh</p>
            <p>Account & Wishlist</p>
          </div>
          <div className={styles.HeaderOrderDetails}>
            <p>Returns</p>
            <p>Orders</p>
          </div>
          <div className={styles.HeaderCart}>
            <span>0</span>
            <BiCart size={40} />

          </div>
        </div>
      </div>
      <div className={styles.HeaderBottom}>
        {bottomHeaderData.map(populateHeaderBottom)}
        <div className={styles.HeaderBottomAlexaBanner}>
          <Image src="/static/Alexa_Banner.jpg" layout="fill" objectFit="contain" objectPosition="center" alt="alexa" />
        </div>
      </div>
    </header>
  );
}
