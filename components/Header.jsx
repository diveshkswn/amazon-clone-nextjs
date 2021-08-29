/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { BiSearchAlt2, BiCart } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Header.module.css';
import { bottomHeaderData } from '../data/bottomHeaderData';
import { useAuth } from '../context/AuthContext';
import UserProfile from './UserProfile';

export default function Header() {
  const router = useRouter();
  const bottomNavRef = useRef();
  const { currentUser } = useAuth();
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  function handleRoute(path) {
    router.push(`/${path}`);
  }

  function populateHeaderBottom(data) {
    return (
      <p key={data.id}>{data.name}</p>
    );
  }

  // Hide bottom navbar on scroll
  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        bottomNavRef.current.style.opacity = 0;
      } else {
        bottomNavRef.current.style.opacity = 1;
      }
    }

    window.onscroll = () => { scrollFunction(); };
  }, []);

  return (
    <header className={styles.HeaderMainContainer}>
      <div className={styles.HeaderTopContainer}>
        {/* LOGO */}
        <div className={styles.HeaderTopLogo} onClick={() => handleRoute('')}>
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
            <p>
              <UserProfile user={currentUser} />
            </p>
            <p>Account & Wishlist</p>
          </div>
          <div className={styles.HeaderOrderDetails}>
            <p>Returns</p>
            <p>Orders</p>
          </div>
          <div className={styles.HeaderCart} onClick={() => handleRoute('checkout')}>
            <span>0</span>
            <BiCart size={40} />

          </div>
        </div>
      </div>
      <div ref={bottomNavRef} className={styles.HeaderBottom}>
        {bottomHeaderData.map(populateHeaderBottom)}
        <div className={styles.HeaderBottomAlexaBanner}>
          <Image src="/static/Alexa_Banner.jpg" layout="fill" objectFit="contain" objectPosition="center" alt="alexa" />
        </div>
      </div>
    </header>
  );
}
