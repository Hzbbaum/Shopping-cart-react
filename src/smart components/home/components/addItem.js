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
      {/* <div>הקטגוריה הנבחרת היא: {chosenCategory}</div> */}
      <div class="input-group mb-3">
        <FormControl
          type="text"
          placeholder="שם המוצר"
          aria-label="מוצר המוסף לרשימה"
          onChange={handleChange}
          value={itemName}
        ></FormControl>
        <Button
          onClick={addItemToCategory}
          disabled={chosenCategory === null || itemName === ""}
          class="btn btn-outline-secondary"
          type="button"
          aria-roledescription="submit"
        >
          הוסף לעגלה
        </Button>
      </div>
      <CategoriesList
        changeCategoryHandler={setchosenCategory}
        chosenCategory={chosenCategory}
      />
    </div>
  );
}
