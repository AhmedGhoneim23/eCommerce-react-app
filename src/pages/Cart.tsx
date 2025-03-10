import Heading from "@components/common/Heading/Heading";
import CartItemList from "@components/eCommerce/CartItemList/CartItemList";
import TotalPrice from "@components/eCommerce/TotalPrice/TotalPrice";
import Loading from "@components/feedback/loading/Loading";
import {
  actGetCartItemById,
  removeFromCart,
  selectQuantityvalue,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetCartItemById());
  }, [dispatch]);

  const products = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const removeCartItemHandler = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(selectQuantityvalue({ id, quantity }));
    },
    [dispatch]
  );

  return (
    <>
      <Heading>Your Cart</Heading>
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
