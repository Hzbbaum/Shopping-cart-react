import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: {},
  },
  reducers: {
    addItemToCategory: (state, action) => {
      const {categoryName, itemName} = action.payload
      if (state.value[categoryName]) {
        if (state.value[categoryName][itemName]) {
          state.value[categoryName][itemName] =
            Number(state.value[categoryName][itemName]) + 1;
        } else {
          state.value[categoryName][itemName] = 1;
        }
      } else {
        state.value[categoryName] = {};
        state.value[categoryName][itemName] = 1;
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

// export const getCategoriesAsync = () => (dispatch) => {
//   fetch("https://localhost:7227/api/CategoryItems").then((hm) => {
//     console.log(hm);
//     hm.forEach((element) => {
//       dispatch(addCategory(element.name));
//     });
//   });
// };

export const selectList = (state) => state.list.value;
export const selectListCount = (state) =>
  Object.values(state.list.value).reduce(
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
