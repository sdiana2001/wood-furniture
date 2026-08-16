import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';


function App() {

  return (
<div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Promo />} />
            {/* Дополнительные маршруты при необходимости: */}
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
