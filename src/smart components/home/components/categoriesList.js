import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../listSlice";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

// displays a list of catagories and returns the chosen one
export default function CategoriesList(props) {
  const [radioValue, setRadioValue] = useState('1');
  const list = useSelector(selectList);

  const categoryButtons = list.map((category, idx) => (
    <ToggleButton
      key={category.name}
      items={category.items}
      value={category.name}
      id={`radio-${idx}`}
      type="radio"
      variant="outline-primary"
      name="radio"
      checked={radioValue === category.name}
      onChange={updateCategory}
    >
      {category.name}
    </ToggleButton>
  ));
  function updateCategory(e) {
    setRadioValue(e.currentTarget.value);
    props.changeCategoryHandler(e.target.value);
  }
  return (
    <React.Fragment>
      <ButtonGroup>{categoryButtons}</ButtonGroup>
    </React.Fragment>
  );
}
