import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory as addCategoryToStore, addItemToCategory as addItemToCategoryInStore } from "../../listSlice";
import CategoriesList from "./categoriesList";

export default function AddItem() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  // function addCategory() {
  //   dispatch(addCategoryToStore(input));
  // }
  function addItemToCategory(){
    dispatch(addItemToCategoryInStore({categoryName: "milk", itemName:input}))
  }

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input value={input} onChange={handleChange}></input>
      {/* <button onClick={addCategory}>submit</button> */}
      <button onClick={addItemToCategory}>submit</button>
      <CategoriesList />
    </div>
  );
}
