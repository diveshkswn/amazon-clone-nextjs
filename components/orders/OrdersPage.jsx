import { useEffect, useState } from 'react';
import styles from '../../styles/OrdersPage.module.css';
import { useAuth } from '../../context/AuthContext';
import OrdersList from './OrderList';

export default function OrdersPage() {
  const { currentUser } = useAuth();
  const [orderState, setOrderState] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setOrderState(true);
    } else {
      setOrderState(false);
    }
  }, [currentUser]);

  return (
    <div className={styles.OrdersPageMainContainer}>
      <div className={styles.OrdersContent}>
        <div className={styles.OrdersHeading}>
          Your orders
        </div>
        <hr />
        <div className={styles.OrderList}>
          {orderState ? <OrdersList /> : <span>Please sign in to see your orders</span>}
        </div>
      </div>

    </div>
  );
}
