/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/OrdersPage.module.css';
import { useAuth } from '../../context/AuthContext';
import OrdersList from './OrderList';

export default function OrdersPage({ orderList }) {
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
    <motion.div
      initial={{ y: -300, scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >

      <div className={styles.OrdersPageMainContainer}>
        <div className={styles.OrdersContent}>
          <div className={styles.OrdersHeading}>
            Your orders
          </div>
          <hr />
          <div className={styles.OrderList}>
            {orderState ? <OrdersList orderList={orderList} /> : <span>Please sign in to see your orders</span>}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
