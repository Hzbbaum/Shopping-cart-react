import React from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../listSlice";
import Button from "react-bootstrap/Button";

export default function CategoriesList(props) {
  const list = useSelector(selectList);
  const categoryButtons = list.map((category) => (
    <Button
      key={category.name}
      items={category.items}
      value={category.name}
      onClick={updateCategory}
    >
      {category.name}
    </Button>
  ));
  function updateCategory(e) {
    props.changeCategoryHandler(e.target.value);
  }
  return <React.Fragment>{categoryButtons}</React.Fragment>;
}
