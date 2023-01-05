import React from "react";
import { useSelector } from "react-redux";
import {isObject} from "../../../Helper/helper";
import { selectList } from "../../listSlice";

export default function CategoriesList() {
  const list = useSelector(selectList);
  const categoryButtons = isObject(list.keys)
    ? Object.keys(list).map((key) => (
        <button key={key} items={list[key]} value={key}>
          {key}
        </button>
      ))
    : "";
  return <div>{categoryButtons}</div>;
}
