import "./App.css";
import Header from "./plain components/header";
import Footer from "./plain components/footer";
import Home from "./smart components/home/home";
import { addCategory } from "./smart components/listSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Category from "./smart components/category/category";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      // "https://shoppingcartapi20230104113010.azurewebsites.net/api/CategoryItems"
      "/api/CategoryItems"

    )
      .then((categories) => {
        categories.forEach((categoryItem) => {
          dispatch(addCategory(categoryItem.name));
        });
      })
      .catch((e) => {
        //this is so we can test the app even if the backend is not working
        [
          { id: 1, name: "שוקולד" },
          { id: 2, name: "מנטה" },
          { id: 3, name: "מסטיק" },
        ].forEach((element) => {
          dispatch(addCategory(element.name));
        });
      });
  });

  return (
    <div className="App">
      <Header></Header>
      <main className="p-4 bg-primary-subtle">
        <Home />
        <Category />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
