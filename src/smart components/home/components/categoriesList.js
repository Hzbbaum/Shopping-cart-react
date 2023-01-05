import React from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../listSlice";

export default function CategoriesList() {
  const list = useSelector(selectList);
  const categoryButtons = list.map((category) => (
    <button key={category.name} items={category.items} value={category.name}>
      {category.name}
    </button>
  ));
  return <div>{categoryButtons}</div>;
}
