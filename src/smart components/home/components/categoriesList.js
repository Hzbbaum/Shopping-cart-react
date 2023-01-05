import React from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../listSlice";

export default function CategoriesList(props) {
  const list = useSelector(selectList);
  const categoryButtons = list.map((category) => (
    <button
      key={category.name}
      items={category.items}
      value={category.name}
      onClick={updateCategory}
    >
      {category.name}
    </button>
  ));
  function updateCategory(e) {
    props.changeCategoryHandler(e.target.value);
  }
  return <React.Fragment>{categoryButtons}</React.Fragment>;
}
