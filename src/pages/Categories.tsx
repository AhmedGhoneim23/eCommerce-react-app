import Category from "@components/eCommerce/Category/Category";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import Loading from "@components/feedback/loading/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";
import { Container } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
    <Heading>Categories</Heading>
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
