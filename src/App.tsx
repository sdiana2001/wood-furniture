import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';


function App() {

  return (
<div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categorySlug" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
