import Image from 'next/image';
import {

  Button,

} from '@chakra-ui/react';
import styles from '../styles/CheckoutPage.module.css';

export default function CheckoutPage() {
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
          <h1>CartList</h1>

        </div>
      </div>
      <div className={styles.ProceedToCheckout}>
        <div className={styles.ItemAndAmount}>
          Total(2 items) :
          {' '}
          <span>100$</span>
        </div>
        <div className={styles.CheckoutButton}>
          <Button
            mt={10}
            variant="solid"
            _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
            bgColor="var(--amazon-yellow)"
            width="80%"
            disabled
            _focus={{ outline: 'none' }}
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
