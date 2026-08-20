import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Collection.module.scss';
import { useAppSelector, type AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

const categories = [
  { id: 'chair', title: 'Chair', img: '/collection/Chair.png' },
  { id: 'table', title: 'Table', img: '/collection/Table.png' },
  { id: 'bookshelf', title: 'BookSelf', img: '/collection/BookSelf.png' },
  { id: 'sofa', title: 'Sofa', img: '/collection/Sofa.png' },
  { id: 'lamp', title: 'Lamp', img: '/collection/Lamp.png' },
];

const Collection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const activeCategoryId = useAppSelector((state)=> state.filter.categoryId);


  return (
    <section className={styles.collection}>
      <h2 className={styles.title}>Collection</h2>

      <div className={styles.carouselWrapper}>
        <button className={`${styles.navBtn} ${styles.prevBtn}`} id="prevBtn" type="button">
          ‹
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevBtn',
            nextEl: '#nextBtn',
          }}
          spaceBetween={24}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className={styles.swiperContainer}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <div 
              onClick={() => 
                dispatch(setCategoryId(item.id))} className={`${styles.card } ${activeCategoryId === item.id ? styles.active : '' }`}>
                <div className={styles.imgWrapper}>
                  <img src={item.img} alt={item.title} />
                </div>
                <span className={styles.cardTitle}>{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className={`${styles.navBtn} ${styles.nextBtn}`} id="nextBtn" type="button">
          ›
        </button>
      </div>
    </section>
  );
};

export default Collection;