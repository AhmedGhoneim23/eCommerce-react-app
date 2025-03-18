import { TProduct } from "@customTypes/index";
import styles from "./Styles.module.css";

type CartSubtotalPriceProps = { products: TProduct[] };

const TotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const totalPrice = products.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity;

    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{totalPrice} EGP</span>
    </div>
  );
};

export default TotalPrice;
