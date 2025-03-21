import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Col, Row } from "react-bootstrap";

type TRenderProps<T> = {
  records: T[];
  renderItem: (records:T) => React.ReactNode;
  message: string;
}
const GridList = <T extends {id?: number}>({records, renderItem, message}: TRenderProps<T>) => {
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
      : <LottieHandler type="empty" message={message} />;
  return (
    <Row>{categoriesList}</Row>
  )
}

export default GridList