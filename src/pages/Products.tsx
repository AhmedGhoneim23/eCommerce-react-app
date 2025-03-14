import Product from "@components/eCommerce/Product/Product";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/loading/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";
import { Container } from "react-bootstrap";
const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productFullInfo = records.map((el) => {
    return {
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: wishListItemsId.includes(el.id)
    };
  });

  useEffect(() => {
    dispatch(actGetProducts(prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Heading>{prefix} Product</Heading>
      <Loading loading={loading} error={error}>
        <GridList
          records={productFullInfo}
          renderItem={(records) => <Product {...records} />}
        />
      </Loading>
      </Container>
  );
};

export default Products;
