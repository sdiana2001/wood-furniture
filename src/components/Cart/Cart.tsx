
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Cart.module.scss';

const Cart = () => {
  const dispatch = useAppDispatch();
  const {items, totalPrice} = useAppSelector((state) => state.cart);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      {items.length === 0 ?(
        <div className={styles.empty}>
          <p>Ваша корзина пуста 🛒</p>
        </div>
      ): (

      <div className={styles.layout}>
        {/* Список товаров */}
        <div className={styles.itemList}>

        {items.map((item) => (
        <div key={item.id} className={styles.itemCard}>
            <img src={item.image}
              alt={item.title}
              className={styles.itemImage}
            />
            
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              <div className={styles.itemPrice}>{item.price.toLocaleString()} сом</div>
            </div>

            <div className={styles.quantityControls}>
              <button type="button" onClick={()=> dispatch(minusItem(item.id))}>-</button>
              <span>1</span>
              <button type="button" onClick={()=> dispatch(addItem(item))}>+</button>
            </div>

            <div className={styles.itemTotal}> {(item.price * item.quantity).toLocaleString()} coм </div>

            <button className={styles.removeBtn} type="button" aria-label="Remove item" onClick={()=> dispatch(removeItem(item.id))}>
              ✕
            </button>
          </div>
        ))}


        
        </div>

        {/* Блок итогового чека */}
        <div className={styles.summaryCard}>
          <h2>Order Summary</h2>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{totalPrice.toLocaleString()} сом</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span className={styles.freeText}>Free</span>
          </div>

          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total</span>
            <span>{totalPrice.toLocaleString()} сом</span>
          </div>

          <button className={styles.checkoutBtn} type="button">
            Proceed to Checkout
          </button>
        </div>
      </div>
      )}

    </div>
  );
};

export default Cart;