import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Collection.module.scss';

const categories = [
  { id: 1, title: 'Chair', img: '/public/collection/Chair.png' },
  { id: 2, title: 'Table', img: '/public/collection/Table.png' },
  { id: 3, title: 'BookSelf', img: '/public/collection/BookSelf.png' },
  { id: 4, title: 'Sofa', img: '/public/collection/Sofa.png' },
  { id: 5, title: 'Lamp', img: '/public/collection/Lamp.png' },
  { id: 6, title: 'Chair', img: '/public/collection/Chair.png' },
];

const Collection = () => {
  return (
    <section className={styles.collection}>
      <h2 className={styles.title}>Collection</h2>

      <div className={styles.carouselWrapper}>
        {/* Кастомные стрелки навигации */}
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
              <div className={styles.card}>
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