/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from '../styles/Footer.module.css';

export default function Footer() {
// When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className={styles.FooterMainContainer}>
      <div className={styles.FooterButton} onClick={() => topFunction()}>
        <span>Back To Top</span>
      </div>
      <div className={styles.FooterContent}>
        <span>
          Developed by
          {' '}
          <a href="https://diveshkswn.github.io/portfolio_/" target="_blank" rel="noreferrer">Divesh Keswani</a>
        </span>
      </div>
    </div>
  );
}
