import { Container } from "react-bootstrap";
import Product from "@components/eCommerce/Product/Product";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/loading/Loading";
import GridList from "@components/common/GridList/GridList";
const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProducts(prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(records) => <Product {...records} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
