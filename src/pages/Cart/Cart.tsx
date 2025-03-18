import { Heading } from "@components/common/index";
import { CartItemList, TotalPrice } from "@components/eCommerce/index";
import Loading from "@components/feedback/loading/Loading";

import useCart from "./useCart";

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
      <Loading error={error} loading={loading}>
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
          "Your Cart is empty"
        )}
      </Loading>
    </>
  );
};

export default Cart;
