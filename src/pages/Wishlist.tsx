import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  productsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";
import { actGetWishlist } from "@store/wishlist/act/actGetWishlist";
import Heading from "@components/common/Heading/Heading";
import Loading from "@components/feedback/loading/Loading";
import GridList from "@components/common/GridList/GridList";
import Product from "@components/eCommerce/Product/Product";


const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

  return (
    <>
      <Heading>Your Wishlist</Heading>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;