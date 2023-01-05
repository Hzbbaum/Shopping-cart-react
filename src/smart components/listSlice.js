import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: {},
  },
  reducers: {
    addItemToCategory: (state, action) => {
      const categoryName = action.category;
      const itemName = action.item;
      if (state.value[categoryName]) {
        if (state.value[categoryName][itemName]) {
          state.value[categoryName][itemName] =
            state.value[categoryName][itemName] + 1;
        } else {
          state.value[categoryName][itemName] = 0;
        }
      } else {
        state.value[categoryName] = {};
        state.value[categoryName][itemName] = 0;
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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getCategories = () => (dispatch) => {
  fetch("https://localhost:7227/api/CategoryItems").then((hm) => {
    console.log(hm);
    hm.forEach((element) => {
      dispatch(addCategory);
    });
  });
};

export const selectList = (state) => state.list.value;
export const selectListCount = (state) =>
Object.values(state.list.value).reduce(
    (sum, category) =>
      (sum = sum + Object.values(category).reduce((innerSum, items) => (innerSum += items), 0)),
    0
  )
;

export default listSlice.reducer;
