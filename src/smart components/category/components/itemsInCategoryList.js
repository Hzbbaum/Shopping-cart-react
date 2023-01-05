import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ItemsInCategoryList(props) {
  const listItems = props.items.map((item) => (
    <ListGroupItem key={item.name}>
      {item.name}:{item.count}
    </ListGroupItem>
  ));
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <h2>{props.name}</h2>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
}
