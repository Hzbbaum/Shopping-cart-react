import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {},
  reducers: {
    addItemToCategory: (state, action) => {
      const { categoryName, itemName } = action.payload;
      if (state.items[categoryName]) {
        if (state.items[categoryName][itemName]) {
          let newItem = {};
          newItem[itemName] = Number(state.value[categoryName][itemName]) + 1;
          state = { ...state, ...{ ...state[categoryName], ...newItem } };
        } else {
          let newItem = {};
          newItem[itemName] = 1;
          state = { ...state, ...{ ...state[categoryName], ...newItem } };
        }
      } else {
        let newItem = {};
        newItem[categoryName] = {};
        newItem[categoryName][itemName] = 1;
        state = { ...state, ...newItem };
      }
    },
    addCategory: (state, action) => {
      if (!state[action.payload]) {
        let newItem = {};
        newItem[action.payload] = {};
        state = { ...state, ...newItem };
      }
    },
  },
});

export const { addItemToCategory, addCategory } = listSlice.actions;

export const selectList = (state) => state.list;
export const selectListCount = (state) =>
  Object.values(state.list).reduce(
    (sum, category) =>
      (sum =
        sum +
        Object.values(category).reduce(
          (innerSum, items) => (innerSum += items),
          0
        )),
    0
  );

export default listSlice.reducer;
