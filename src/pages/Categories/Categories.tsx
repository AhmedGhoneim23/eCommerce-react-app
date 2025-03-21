import { Category } from "@components/eCommerce/index";
import Loading from "@components/feedback/Loading/Loading";
import { Heading, GridList } from "@components/common/index";
import { Container } from "react-bootstrap";
import useCategories from "./useCategories";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <Container>
      <Heading title="Categories" />
      <Loading loading={loading} error={error} type="category">
        <GridList
          records={records}
          renderItem={(records) => <Category {...records} />}
          message="There Are No Categories"
        />
      </Loading>
    </Container>
  );
};

export default Categories;
