import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/index";
import { memo } from "react";

const { cartItem, product, productImg, productInfo } = styles;

type TCartItemList = TProduct & {
  removeCartItemHandler: (id: number) => void;
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const CartItem = memo(
  ({
    img,
    title,
    price,
    id,
    max,
    quantity,
    removeCartItemHandler,
    changeQuantityHandler,
  }: TCartItemList) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, index) => {
        const quantity = ++index;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <Button
              variant="secondary"
              className="mt-auto"
              style={{ width: "fit-content" }}
              onClick={() => removeCartItemHandler(id)}
            >
              Remove
            </Button>
          </div>
        </div>
        <div>
          <span className=" mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
