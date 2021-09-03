/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { Progress } from '@chakra-ui/react';
import OrdersPage from '../components/orders/OrdersPage';
import { projectFirestore } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Orders() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [signedState, setSignedState] = useState(false);
  const [completedOrderList, setCompletedOrderList] = useState([]);
  //
  useEffect(() => {
    async function fetchCompletedOrders() {
      const completedOrders = await projectFirestore.collection('users')
        .doc(currentUser.email).collection('orders').orderBy('timestamp', 'desc')
        .get();

      // Fething orders from firebase docs
      const orders = await Promise.all(
        completedOrders.docs.map(async (order) => ({
          id: order.id,
          amount: order.data().amount,
          images: order.data().images,
          timestamp: order.data().timestamp.toDate(),
          items: order.data().qty,
          title: order.data().title,
        })),
      );
      setCompletedOrderList(orders);
      setLoading(false);
    }

    if (currentUser) {
      setSignedState(true);
      // firebase db call to fetch orders and set Loading false once done
      fetchCompletedOrders();
    } else {
      setSignedState(false);
      // setLoading(true);
    }
  }, [currentUser]);

  return (
    <>
      {/* If loading is true then show progress bar(if user is signed in) else Orders Page */}
      {loading && (signedState && <Progress size="xs" height="10px" colorScheme="yellow" isIndeterminate />) }
      {/* If user not signed in then show span message */}
      {/* {!signedState && <span style={{ textAlign: 'center', fontSize: '1.5rem' }}>Please sign in to see your orders</span>} */}
      {(!loading || !signedState) && <OrdersPage orderList={completedOrderList} />}

    </>
  );
}
