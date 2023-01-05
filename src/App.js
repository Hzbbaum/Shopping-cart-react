import "./App.css";
import Header from "./plain components/header/header";
import Home from "./smart components/home/home";
import { addCategory, selectListCount } from "./smart components/listSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemsInCategoryList from "./smart components/category/components/itemsInCategoryList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://shoppingcartapi20230104113010.azurewebsites.net/api/CategoryItems")
      .then((hm) => {
        console.log(hm);
        hm.forEach((element) => {
          dispatch(addCategory(element.name));
        });
      })
      .catch((e) => {
        [
          { id: 1, name: "milk" },
          { id: 2, name: "honey" },
          { id: 3, name: "sugar" },
        ].forEach((element) => {
          dispatch(addCategory(element.name));
        });
      });
  });

  const count = useSelector(selectListCount);
  return (
    <div className="App">
      <Header></Header>
      <main className="p-4 bg-primary-subtle">
        <Home/>
        <ItemsInCategoryList/>
      </main>
    </div>
  );
}

export default App;
