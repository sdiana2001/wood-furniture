import { useEffect } from "react";
import Collection from "../components/Collection/Collection";
import { fetchProducts } from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from "../redux/store";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import Contact from "../components/Contact/Contact";
import Promo from "../components/Promo/Promo";


const Home = () => {
    const dispatch = useAppDispatch();
      const { products, status } = useAppSelector((state) => state.product);
      const { categoryId } = useAppSelector((state) => state.filter);


 useEffect(() => {
    // Вызываем загрузку товаров без аргументов
    dispatch(fetchProducts({categoryId}));
  }, [dispatch, categoryId]);

  if (status === 'error') {
    return <div className="error">Произошла ошибка при загрузке товаров 😕</div>;
  }
  return (<>
  <Promo />
   <Collection />
        <h2 className="myTitle" style={{ textTransform: 'capitalize' }}>
          {categoryId === 'all' ? 'Best Selling Item' : categoryId}
         </h2>
      <section className="products-grid">
        {status === 'loading' ? (
          <div className="waiting">Подождите немного...</div>
        ) : (
          products.map((obj) => (
            <ItemBlock {...obj} key={obj.id} />
          )))}
      </section>
      <Contact />
       </>
  )
}

export default Home;