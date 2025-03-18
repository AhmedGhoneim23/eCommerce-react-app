import { TProduct } from "@customTypes/index";
import { CartItem } from "../index";

type TCartItemList = {
  products: TProduct[];
  removeCartItemHandler: (id: number) => void;
  changeQuantityHandler: (id: number, quantity: number) => void;
};
const CartItemList = ({
  products,
  removeCartItemHandler,
  changeQuantityHandler,
}: TCartItemList) => {
  const renderList = products.map((product) => {
    return (
      <CartItem
        key={product.id}
        {...product}
        removeCartItemHandler={removeCartItemHandler}
        changeQuantityHandler={changeQuantityHandler}
      />
    );
  });

  return <div>{renderList}</div>;
};

export default CartItemList;
