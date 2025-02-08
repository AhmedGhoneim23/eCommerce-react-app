import { Container } from "react-bootstrap";

import styles from "./styles.module.css";
import Header from "../components/common/Header/Header";


const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <div className={wrapper}>
        <Header/>
      </div>
    </Container>
  );
};

export default MainLayout;
