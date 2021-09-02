/* eslint-disable max-len */
import moment from 'moment';
import Image from 'next/image';
import styles from '../../styles/OrderCard.module.css';

export default function OrderCard({
  date, amount, images, items, orderNo,
}) {
  return (
    <div className={styles.OrderCardMainContainer}>
      <div className={styles.OrderHeading}>
        <div className={styles.OrderPlaced}>
          <div>ORDER PLACED</div>
          {/* <div>{`${new Date(date).toLocaleDateString()}  ${new Date(date).toLocaleTimeString()}`}</div> */}
          <div>{moment(date).format('DD MMM YY HH:MM:SS A')}</div>
        </div>
        <div className={styles.OrderTotal}>
          <div>Total</div>
          <div>
            {amount}
            ₹
          </div>
        </div>
        <div />
        <div className={styles.OrderNo}>
          <div>
            Order :
            {orderNo.substr(10, 13)}
          </div>
          <div>
            {items}
            {' '}
            Items
          </div>
        </div>
      </div>
      <div className={styles.OrderImages}>
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        {images.map((image) => (<img key={image} src={image} alt="Order_Page_Image" />))}
      </div>
    </div>
  );
}
