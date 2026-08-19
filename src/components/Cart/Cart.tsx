
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.layout}>
        {/* Список товаров */}
        <div className={styles.itemList}>
          <div className={styles.itemCard}>
            <img src="/public/collection/Chair.png"
              alt="Modern Wood Chair"
              className={styles.itemImage}
            />
            
            <div className={styles.itemDetails}>
              <h3>Modern Wood Chair</h3>
              <div className={styles.itemPrice}>12 500 сом</div>
            </div>

            <div className={styles.quantityControls}>
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>

            <div className={styles.itemTotal}>12 500 сом</div>

            <button className={styles.removeBtn} type="button" aria-label="Remove item">
              ✕
            </button>
          </div>
          <div className={styles.itemCard}>
            <img src="/public/table/Table-4.png"
              alt="Minimalist Coffee Table"
              className={styles.itemImage}
            />
            
            <div className={styles.itemDetails}>
              <h3>Minimalist Coffee Table</h3>
              <div className={styles.itemPrice}>18 000 сом</div>
            </div>

            <div className={styles.quantityControls}>
              <button type="button">-</button>
              <span>2</span>
              <button type="button">+</button>
            </div>

            <div className={styles.itemTotal}>36 000 сом</div>

            <button className={styles.removeBtn} type="button" aria-label="Remove item">
              ✕
            </button>
          </div>
        </div>

        {/* Блок итогового чека */}
        <div className={styles.summaryCard}>
          <h2>Order Summary</h2>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>48 500 сом</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span className={styles.freeText}>Free</span>
          </div>

          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total</span>
            <span>48 500 сом</span>
          </div>

          <button className={styles.checkoutBtn} type="button">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;