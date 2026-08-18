import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <h1 className={styles.title}>Transform Your Home with Furniture</h1>
        <button className={styles.btn} type="button">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Contact;