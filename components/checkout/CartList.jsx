import styles from '../../styles/CartList.module.css';
import CartCard from './CartCard';

export default function CartList({ cartList }) {
  function populateCarts(cart) {
    return (
      <CartCard
        key={cart.id}
        id={cart.id}
        title={cart.title}
        qty={cart.qty}
        imageURL={cart.imageURL}
        description={cart.description}
        primeDeliveryState={cart.hasPrime}
        category={cart.category}
        price={cart.price}
      />
    );
  }

  return (
    <>
      <div className={styles.CartListMainContainer}>
        {cartList.map(populateCarts)}
      </div>
    </>
  );
}
