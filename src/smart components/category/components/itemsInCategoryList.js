import React from "react";
import { isObject } from "../../../Helper/helper";

export default function ItemsInCategoryList(props) {

  const listItems = isObject(props.items)
    ? Object.keys(props.items.keys).map((key) => (
        <li key={key}>
          <h4>{key}</h4>:props.items[key]
        </li>
      ))
    : "";
  return (
    <div>
      <h3>{props.name}</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
