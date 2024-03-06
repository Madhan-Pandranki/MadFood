import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK -> either mutate the existing state or return a new state

      // state.items.length = 0; // original state = {items:[]}
      // state = [] will not work as it only updates locally not globally

      return { items: [] }; // this new object will be replaced inside original State = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
