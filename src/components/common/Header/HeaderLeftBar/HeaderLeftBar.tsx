import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistLogo from "@assets/svg/wishlist.svg?react";
import CartLogo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector((state) => state.wishlist.itemsId.length);
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={styles.logoContainer}>
      <HeaderCounter
        title="Wishlist"
        totalQuantity={wishlistTotalQuantity}
        page="/wishlist"
        svgIcon={ <WishlistLogo title="wishlist" /> }
      />
      <HeaderCounter
        title="Cart"
        totalQuantity={cartTotalQuantity}
        page="/cart"
        svgIcon={ <CartLogo title="cart" /> }
      />
    </div>
  );
};

export default HeaderLeftBar;
