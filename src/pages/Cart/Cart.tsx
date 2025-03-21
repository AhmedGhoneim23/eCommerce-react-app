import { Heading } from "@components/common/index";
import { CartItemList, TotalPrice } from "@components/eCommerce/index";
import Loading from "@components/feedback/Loading/Loading";

import useCart from "./useCart";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Cart = () => {
  const {
    products,
    loading,
    error,
    removeCartItemHandler,
    changeQuantityHandler,
  } = useCart();
  return (
    <>
      <Heading title="Cart" />
      <Loading error={error} loading={loading} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              removeCartItemHandler={removeCartItemHandler}
              changeQuantityHandler={changeQuantityHandler}
            />
            <TotalPrice products={products} />
          </>
        ) : (
          <LottieHandler type="empty" message="Your Cart Is Empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
