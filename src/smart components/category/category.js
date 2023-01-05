import React from "react";

import { useSelector } from "react-redux";
import { selectList } from "../listSlice";
import ItemsInCategoryList from "./components/itemsInCategoryList";

export default function Category() {
  const list = useSelector(selectList);
  const categoryItems = list.map((category) => (
    <ItemsInCategoryList
      key={category.name}
      items={category.items}
      name={category.name}
    ></ItemsInCategoryList>
  ));

  return (
    <div className="container">
      <div className="row">{categoryItems}</div>
    </div>
  );
}
