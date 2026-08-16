import styles from './Promo.module.scss';

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <h1 className={styles.title}>Enhance Your House Beauty <br /> with Wood Furniture</h1>
        <p className={styles.subtitle}>
          Upgrade your home's aesthetic appeal with our exquisite collection of wood furniture
        </p>
        <button className={styles.btn} type="button">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Promo;