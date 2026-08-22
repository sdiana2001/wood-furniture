import { useEffect } from "react";
import Collection from "../components/Collection/Collection";
import { fetchProducts } from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from "../redux/store";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import Contact from "../components/Contact/Contact";
import Promo from "../components/Promo/Promo";
import Skeleton from '../components/ItemBlock/Skeleton';
import { useParams } from "react-router-dom";


const Home = () => {
    const dispatch = useAppDispatch();

      const { products, status } = useAppSelector((state) => state.product);
      // const { categoryId } = useAppSelector((state) => state.filter);
      const{ categorySlug } = useParams<{ categorySlug?: string }>();

      const currentCategory = categorySlug || 'all';
      const skeletonCount = currentCategory === 'all' ? 16 : 4;

 useEffect(() => {
    // Вызываем загрузку товаров без аргументов
    dispatch(fetchProducts({categoryId:currentCategory}));
  }, [dispatch, currentCategory]);



const skeletons = [...new Array(skeletonCount)].map((_, index) => <Skeleton key={index} />);


  if (status === 'error') {
    return <div className="error">Произошла ошибка при загрузке товаров 😕</div>;
  }
  return (<>
  <Promo />
   <Collection />
        <h2 className="myTitle" style={{ textTransform: 'capitalize' }}>
          {currentCategory === 'all' ? 'Best Selling Item' : currentCategory}
         </h2>
      <section className="products-grid">
        {status === 'loading' ? (
          skeletons
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