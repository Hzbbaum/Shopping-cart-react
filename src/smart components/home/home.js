import React from "react";
import TotalCount from "./components/totalcount";
import { useSelector } from "react-redux";
import { selectListCount } from "../listSlice";
import AddItem from "./components/addItem";

export default function Home() {
  const count = useSelector(selectListCount)
  return (
    <div>
      <TotalCount itemsCount={count} />
      <AddItem />
    </div>
  );
}
