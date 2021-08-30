/* eslint-disable max-len */
import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/CartCard.module.css';
import { addToCart, removeFromCart } from '../../redux/features/cartSlice';

export default function CartCard({
  id, title, description, price, imageURL, category, qty, primeDeliveryState,
}) {
  const dispatch = useDispatch();
  function handleAddCart() {
    dispatch(addToCart({
      id, title, description, price, imageURL, category,
    }));
  }

  function handleRemoveCart() {
    dispatch(removeFromCart({ id }));
  }

  return (
    <div className={styles.CartCardMainContainer}>
      <div className={styles.CartImage}>
        <Image src={imageURL} alt="Cart" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.CartDetails}>
        <div className={styles.CartTitle}>{title}</div>
        <div className={styles.CartDescription}>{description}</div>
        <div className={styles.CartPrice}>
          <span>
            {price}
            {' '}
            ₹
          </span>

          {' '}
          {' '}
          <span>
            x
            {qty}
          </span>
        </div>
        <div className={styles.PrimeDelivery}>
          {primeDeliveryState && (
          <>
            <Image src="/static/product/Prime-tag.png" layout="fixed" height={40} width={50} objectFit="cover" alt="prime day delivery" />
            <span>Free Next day Delivery</span>
          </>
          )}

        </div>
      </div>
      <div className={styles.CartActions}>
        <Button
          isLoading={false}
          variant="solid"
          _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
          bgColor="var(--amazon-yellow)"
          width="85%"
          _focus={{ outline: 'none' }}
          onClick={() => { handleAddCart(); }}
        >
          Add
        </Button>

        <Button
          isLoading={false}
          variant="solid"
          _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
          bgColor="var(--amazon-yellow)"
          width="85%"
          _focus={{ outline: 'none' }}
          onClick={() => { handleRemoveCart(); }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
