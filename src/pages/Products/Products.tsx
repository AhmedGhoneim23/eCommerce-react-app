import Loading from "@components/feedback/Loading/Loading";
import { Heading, GridList } from "@components/common/index";
import { Product } from "@components/eCommerce/index";
import { Container } from "react-bootstrap";
import useProducts from "./useProducts";

const Products = () => {
  const { productFullInfo, prefix, loading, error } = useProducts();

  return (
    <Container>
      <Heading title={`${prefix?.toUpperCase()} Products`} />
      <Loading loading={loading} error={error} type="product">
        <GridList
          records={productFullInfo}
          renderItem={(records) => <Product {...records} />}
          message="There Are No Products"
        />
      </Loading>
    </Container>
  );
};

export default Products;
