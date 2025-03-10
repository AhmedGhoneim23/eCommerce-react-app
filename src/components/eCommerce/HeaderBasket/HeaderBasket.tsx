import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const {
  basketContainer,
  basketCart,
  basketQuantity,
  logo,
  pumpCartQuantity,
  hidden,
} = styles;
const HeaderBasket = () => {
  const navigate = useNavigate()

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  } ${!totalQuantity ? hidden : ""}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={()=> navigate("/cart")}>
      <div className={basketCart}>
        <Logo className={logo} />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
