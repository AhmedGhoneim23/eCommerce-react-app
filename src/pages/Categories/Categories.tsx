import { Category } from "@components/eCommerce/index";
import Loading from "@components/feedback/loading/Loading";
import { Heading, GridList } from "@components/common/index";
import { Container } from "react-bootstrap";
import useCategories from "./useCategories";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <Container>
    <Heading title="Categories"/>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(records) => <Category {...records} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
