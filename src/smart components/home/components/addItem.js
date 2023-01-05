import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCategory as addItemToCategoryInStore } from "../../listSlice";
import CategoriesList from "./categoriesList";
import { Button, FormControl } from "react-bootstrap";

export default function AddItem() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [chosenCategory, setchosenCategory] = useState(null);
  // function addCategory() {
  //   dispatch(addCategoryToStore(input));
  // }
  function addItemToCategory() {
    if (chosenCategory !== null && itemName !== "") {
      dispatch(
        addItemToCategoryInStore({
          categoryName: chosenCategory,
          itemName: itemName,
        })
      );
      setItemName("");
      setchosenCategory(null);
    }
  }

  function handleChange(e) {
    setItemName(e.target.value);
  }

  return (
    <div>
      <div>current category is: {chosenCategory}</div>
      <FormControl value={itemName} onChange={handleChange}></FormControl>
      {/* <button onClick={addCategory}>submit</button> */}
      <Button
        onClick={addItemToCategory}
        disabled={chosenCategory === null || itemName === ""}
      >
        submit
      </Button>
      <CategoriesList changeCategoryHandler={setchosenCategory} />
    </div>
  );
}
