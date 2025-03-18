import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

import {
  actGetCartItemById,
  productFullInfoCleanUp,
  removeFromCart,
  selectQuantityvalue,
} from "@store/cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    const promise = dispatch(actGetCartItemById());
    return () => {
      promise.abort();
      dispatch(productFullInfoCleanUp());
    };
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


  return { products, error, loading, removeCartItemHandler, changeQuantityHandler }
}

export default useCart