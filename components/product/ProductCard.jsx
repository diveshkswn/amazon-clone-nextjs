/* eslint-disable max-len */
import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import styles from '../../styles/ProductCard.module.css';

export default function ProductCard({
  title, description, price, imageURL, category,
}) {
  let randomRatingLength = Math.floor(Math.random() * 5);
  if (randomRatingLength < 2)randomRatingLength = 5;

  const randomPrimeDelivery = randomRatingLength > 3;

  return (
    <div className={styles.ProductCardMainContainer}>
      <div className={styles.ProductCategory}>
        {category}
      </div>
      <div className={styles.ProductImage}>
        <Image src={imageURL} layout="fill" objectFit="contain" alt="Product Image" />
      </div>
      <div className={styles.ProductTitle}>
        {title}
      </div>
      <div className={styles.Description}>
        {description}
      </div>
      <div className={styles.ProductRating}>
        {Array.from(Array(randomRatingLength).keys()).map((i) => (<AiFillStar style={{ margin: '3px' }} key={i} />))}

      </div>
      <div className={styles.ProductPrice}>
        {price}
        {' '}
        $
      </div>

      <div className={styles.PrimeDelivery}>
        {randomPrimeDelivery && (
        <>
          <Image src="/static/product/Prime-tag.png" layout="fixed" height={40} width={50} objectFit="cover" alt="prime day delivery" />
          <span>Free Next day Delivery</span>
        </>
        )}

      </div>

      <div className={styles.AddToCart}>
        <Button
          isLoading={false}
          variant="solid"
          _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
          bgColor="var(--amazon-yellow)"
          width="85%"
          _focus={{ outline: 'none' }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
