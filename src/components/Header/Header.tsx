import styles from './Header.module.scss';
import logoImg from '../../assets/logo/logo.svg';
import personIcon from '../../assets/icons/person.svg';
import cart from '../../assets/icons/cart.svg';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logoImg} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink> {/* ' ' — пустая строка, которая вернется, если isActive === false */}
        <NavLink to="products" className={({ isActive }) => (isActive ? styles.active : '')}>Products</NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : '')}>Shop</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : '')}>Contact</NavLink>
      </nav>
      <div className={styles.actions}>
        <button className={styles.iconBtn}>
            <img src={personIcon} alt="person" />
        </button>
        <NavLink to="/cart"  className={({ isActive }) =>  isActive ? `${styles.iconBtn} ${styles.active}` : styles.iconBtn}>
            <img src={cart} alt="cart" />
        </NavLink>
      </div>
    </header>
  )
}

export default Header;