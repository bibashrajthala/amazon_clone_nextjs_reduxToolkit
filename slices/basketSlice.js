import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      // state.items.push(action.payload)
      //or
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // filter will remove all item with passed id but here we only want to remove one item with that particular id so used splice

      // gets index of >=0 if it finds , but gets -1 if it could not find
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        //the item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        // item dont exists
        console.warn(
          `Can't remove product (id:${action.payload.id}) as it is not in your basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//selectors
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => {
    total += item.price;
    return total;
  }, 0);

export default basketSlice.reducer;
