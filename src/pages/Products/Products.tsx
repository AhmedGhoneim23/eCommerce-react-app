import Loading from "@components/feedback/loading/Loading";
import { Heading, GridList} from "@components/common/index";
import { Product } from "@components/eCommerce/index";
import { Container } from "react-bootstrap";
import useProducts from "./useProducts";

const Products = () => {
  const { productFullInfo, prefix, loading, error } = useProducts();

  return (
    <Container>
      <Heading title={`${prefix?.toUpperCase()} Products`}/>
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
