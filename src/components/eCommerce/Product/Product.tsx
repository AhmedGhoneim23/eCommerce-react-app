import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@customTypes/index";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";

const { product, productImg, maximumNotice, likeContainer } = styles;

const Product = memo(
  ({ id, img, title, price, max, quantity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 400);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const likeToggleHandler = (id: number) => {
      if (!isLoading) {
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      }
    };

    return (
      <div className={product}>
        <div className={likeContainer} onClick={() => likeToggleHandler(id)}>
          {isLoading ? (
            <Spinner size="sm" variant="primary" />
          ) : isLiked ? (
            <LikeFill />
          ) : (
            <Like />
          )}
        </div>

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
  }
);

export default Product;
