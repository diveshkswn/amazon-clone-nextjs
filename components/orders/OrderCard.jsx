import styles from '../../styles/OrderCard.module.css';
// 2:07
export default function OrderCard() {
  return (
    <div className={styles.OrderCardMainContainer}>
      <div className={styles.OrderHeading}>
        <div className={styles.OrderPlaced}>
          <div>Order Placed</div>
          <div>Date</div>
        </div>
        <div className={styles.OrderTotal}>
          <div>Total</div>
          <div>Amt</div>
        </div>
        <div />
        <div className={styles.OrderNo}>
          <div>Order No</div>
          <div>Item Count </div>
        </div>
      </div>
      <div className={styles.OrderImages}>
        Images
      </div>
    </div>
  );
}
