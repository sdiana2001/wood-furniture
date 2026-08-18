// import { useEffect, useState } from 'react';
// import styles from './FullProduct.module.scss';
// import { useParams } from 'react-router-dom';


// const FullProduct = () => {
//    type Product = {
//   imageUrl: string;
//   title: string;
//   price: number;
// };

//  const[product, setProduct] = useState<Product>();
//    const { id } = useParams<{ id:string }>();

//   useEffect(() => {
//     async function fetchPizza() {
//       try {
//         const { data } = await axios.get(`https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/item/` + id);
//         setPizza(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchPizza();
//   }, [id]);

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageWrapper}>
//         <img src={image} alt={title} />
//       </div>
//       <div className={styles.content}>
//         <h3 className={styles.title}>{title}</h3>
//         <div className={styles.rating}>
//           {'★'.repeat(rating)}
//         </div>
//         <div className={styles.price}>{price}</div>
//         <button className={styles.button} type="button">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default FullProduct;