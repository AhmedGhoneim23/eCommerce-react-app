import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/products";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, img, title, price, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 400);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={() => {
          dispatch(addToCart(id));
          setIsBtnDisabled(true);
        }}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner size="sm" /> loading...
          </>
        ) : (
          "add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
