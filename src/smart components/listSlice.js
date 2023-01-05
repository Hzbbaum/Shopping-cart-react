import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
  },
  reducers: {
    addItemToCategory: (state, action) => {
      const {categoryName, itemName} = action.payload
      if (state.items[categoryName]) {
        if (state.items[categoryName][itemName]) {
          state.items[categoryName][itemName] =
            Number(state.value[categoryName][itemName]) + 1;
        } else {
          state.items[categoryName][itemName] = 1;
        }
      } else {
        state.items[categoryName] = {};
        state.items[categoryName][itemName] = 1;
      }
    },
    addCategory: (state, action) => {
      if (!state[action.payload]) {
        state[action.payload] = {};
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
