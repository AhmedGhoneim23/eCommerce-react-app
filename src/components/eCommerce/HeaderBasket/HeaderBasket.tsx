import Logo from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity, logo } = styles;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo className={logo} />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
