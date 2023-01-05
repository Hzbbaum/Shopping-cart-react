import React from "react";

export default function ItemsInCategoryList(props) {
  const isObject = obj => {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
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
