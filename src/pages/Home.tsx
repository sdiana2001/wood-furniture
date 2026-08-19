import { useEffect } from "react";
import Collection from "../components/Collection/Collection";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import type { AppDispatch, RootState } from "../redux/store";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import Contact from "../components/Contact/Contact";
import Promo from "../components/Promo/Promo";


const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
      const { products, status } = useSelector((state: RootState) => state.product);


 useEffect(() => {
    // Вызываем загрузку товаров без аргументов
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'error') {
    return <div className="error">Произошла ошибка при загрузке товаров 😕</div>;
  }
  return (<>
  <Promo />
   <Collection />
        <h2 className="myTitle">Best Selling Item</h2>
      <section className="products-grid">
        {status === 'loading' ? (
          <div>Загрузка...</div>
        ) : (
          products.map((obj) => (
            <ItemBlock {...obj} key={obj.id} />
          ))
        )}
      </section>
      <Contact />
       </>
  )
}

export default Home;