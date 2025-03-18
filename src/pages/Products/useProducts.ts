import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productFullInfo = records.map((el) => {
    return {
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: wishListItemsId.includes(el.id),
    };
  });

  useEffect(() => {
    const promise = dispatch(actGetProducts(prefix as string));
    return () => {
      promise.abort();
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);
  return { productFullInfo, error, loading, prefix };
};

export default useProducts;
