import styles from './Header.module.scss';
import logoImg from '../assets/logo/logo.svg';
import personIcon from '../assets/icons/person-outline.svg';
import bellIcon from '../assets/icons/bell-outline.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="logo" />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.active}>Home</a>
        <a href="#">Products</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className={styles.actions}>
        <button className={styles.iconBtn}>
            <img src={personIcon} alt="person" />
        </button>
        <button className={styles.iconBtn}>
            <img src={bellIcon} alt="bell" />
        </button>
      </div>
    </header>
  )
}

export default Header;