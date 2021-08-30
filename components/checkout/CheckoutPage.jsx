/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import Image from 'next/image';
import {

  Button,

} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import styles from '../../styles/CheckoutPage.module.css';
import CartList from './CartList';
import { useAuth } from '../../context/AuthContext';

export default function CheckoutPage() {
  //
  const { currentUser } = useAuth();
  const cartList = useSelector((state) => state.cart.cartList);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  let totalPrice = cartList.reduce((acc, i) => {
    acc += (i.price * i.qty);
    return acc;
  }, 0);

  const totalQty = cartList.reduce((acc, i) => {
    acc += i.qty;
    return acc;
  }, 0);
  totalPrice = parseFloat(totalPrice).toFixed(2);

  // Stripe checkout session

  async function createCheckoutSession() {
    const stripe = await stripePromise;

    // Calling backend endpoint to create checkout session
    const checkoutSession = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email: currentUser?.email, items: cartList }), // body data type must match "Content-Type" header
    });

    const data = await checkoutSession.json();
    console.log(data);
  }

  return (
    <div className={styles.CheckoutPageMainContainer}>
      <div className={styles.CartList}>
        <div className={styles.CartBanner}>
          <Image src="/static/banner/Cart_Banner.jpg" layout="fill" objectFit="contain" alt="cart banner" />
        </div>
        <div className={styles.CartProductList}>
          <div className={styles.CartListHeading}>
            Cart Items
          </div>
          {/* Cart List */}
          <CartList cartList={cartList} />

        </div>
      </div>
      <div className={styles.ProceedToCheckout}>
        <div className={styles.ItemAndAmount}>
          Total(
          {totalQty}
          {' '}
          items) :
          {' '}
          <span>
            {totalPrice}
            $
          </span>
        </div>
        <div className={styles.CheckoutButton}>
          <Button
            mt={10}
            variant="solid"
            _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
            bgColor="var(--amazon-yellow)"
            width="80%"
            disabled={!currentUser || cartList?.length < 1}
            _focus={{ outline: 'none' }}
            role="link"
            onClick={() => createCheckoutSession()}
          >
            {currentUser ? 'Proceed To Checkout' : 'Sign in to Checkout'}
          </Button>
        </div>
      </div>
    </div>
  );
}
