import React from "react";

import { useSelector } from "react-redux";
import { selectList } from "../listSlice";
import ItemsInCategoryList from "./components/itemsInCategoryList";
import { isObject } from "../../Helper/helper";

export default function Category() {
  const list = useSelector(selectList);
  const categoryItems = isObject(list.keys)
    ? Object.keys(list).map((key) => (
        <ItemsInCategoryList key={key} items={list[key]}></ItemsInCategoryList>
      ))
    : "";

  return <div>{categoryItems}</div>;
}
