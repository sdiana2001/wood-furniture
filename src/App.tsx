import styles from './App.module.scss';
import { Routes } from 'react-router-dom';
import './index.scss'
import Header from './components/Header';


function App() {

  return (
<div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
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
