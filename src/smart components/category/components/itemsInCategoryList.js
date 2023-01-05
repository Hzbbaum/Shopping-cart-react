import React from "react";

export default function ItemsInCategoryList(props) {
  const listItems = props.items.map((item) => (
    <li key={item.name}>
      {item.name}:{item.count}
    </li>
  ));
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
