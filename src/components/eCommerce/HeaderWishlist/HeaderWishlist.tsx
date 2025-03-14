import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "@assets/svg/wishlist.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";

const {
  wishlistContainer,
  wishlistLogoContainer,
  basketQuantity,
  logo,
  pumpCartQuantity,
} = styles;
const HeaderWishlist = () => {
  const navigate = useNavigate();
  const totalQuantity = useAppSelector((state) => state.wishlist.itemsId)

  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

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
    <div className={wishlistContainer} onClick={() => navigate("/wishlist")}>
      <div className={wishlistLogoContainer}>
        <Logo className={logo} />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>Wishlist</h3>
    </div>
  );
};

export default HeaderWishlist;
