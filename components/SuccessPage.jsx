import { AiFillCheckCircle } from 'react-icons/ai';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styles from '../styles/SuccessPage.module.css';

export default function SuccessPage() {
  const router = useRouter();

  function handleRoute(route) {
    router.push(`/${route}`);
  }

  return (
    <div className={styles.SuccessPageMainContainer}>
      <div className={styles.SuccessPageContent}>
        <div className={styles.SuccessHeading}>
          <div className={styles.HeadingLogo}>
            <AiFillCheckCircle size="40" />
          </div>
          <div className={styles.HeadingTitle}>
            Thank you, your order has been confirmed!
          </div>
        </div>
        <div className={styles.SuccessDetails}>
          Thank you for shopping on Amazon Clone. If you want to check your orders
          Then click on Go to my Orders
        </div>
        <div className={styles.SuccessButton}>
          <Button
            isLoading={false}
            variant="solid"
            _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
            bgColor="var(--amazon-yellow)"
            width="85%"
            _focus={{ outline: 'none' }}
            onClick={() => handleRoute('orders')}
          >
            Go to My orders
          </Button>
        </div>
      </div>

    </div>
  );
}
