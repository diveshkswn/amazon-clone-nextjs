import OrderCard from './OrderCard';

export default function OrdersList({ orderList }) {
  function populateOrderCards(order) {
    return (
      <OrderCard
        key={order.id}
        orderNo={order.id}
        amount={order.amount}
        images={order.images}
        items={order.items}
        date={order.timestamp}

      />
    );
  }

  return (
    <>
      <span>
        {orderList.length}
        {' '}
        Orders Placed
      </span>
      {orderList.length > 0 ? orderList.map(populateOrderCards) : ''}
    </>
  );
}
