import styles from "./styles.module.css";
import logo from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import basket from "../../assets/icons/basket.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => {
    return state.cart;
  });

  return (
    <header className={styles.headerContainer}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </NavLink>

      <nav className={styles.linkContainer}>
        <NavLink
          className={styles.nav}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          Main Page
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/categories"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          Categories
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/allProducts"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          All products
        </NavLink>
        <NavLink
          className={styles.nav}
          to="/sale"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          All sales
        </NavLink>
      </nav>

      <NavLink to="/cart" className={styles.basket}>
        <img src={basket} alt="basket" />
        {items.length > 0 && (
          <div className={styles.basketBadge}>{items.length}</div>
        )}
      </NavLink>
    </header>
  );
};

export default Header;
