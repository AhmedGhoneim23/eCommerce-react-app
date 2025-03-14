import { Col, Row } from "react-bootstrap";

type TRenderProps<T> = {
  records: T[];
  renderItem: (records:T) => React.ReactNode;
}
const GridList = <T extends {id?: number}>({records, renderItem}: TRenderProps<T>) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) =>  (
          <Col
            xs={6}
            md={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)} 
          </Col>
        ))
      : "There Are No Items";
  return (
    <Row>{categoriesList}</Row>
  )
}

export default GridList