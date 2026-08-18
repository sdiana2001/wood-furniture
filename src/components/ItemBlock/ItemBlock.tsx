import styles from './ItemBlock.module.scss';

interface ItemBlockProps {
 id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ItemBlock = ({ image, title, price, rating = 5 }: ItemBlockProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.rating}>
          {'★'.repeat(rating)}
        </div>
        <div className={styles.price}>{price} сом</div>
        <button className={styles.button} type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemBlock;