import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";


const getCartTotalQuantitySelector = createSelector((state: RootState) => state.cart.items, (items)=> {
  const cartItemsQuantity = Object.values(items).reduce(
    (acc, curr) => {
      return acc + curr;
    },
    0
  );
  return cartItemsQuantity;
})

export {getCartTotalQuantitySelector}