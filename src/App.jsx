import Header from "./components/Header/Header.jsx";
import ListItem from "./components/ListItem/ListItem.jsx";
import List from "./components/List/List.jsx";
import { useState } from "react";

function App() {
  const [listItemArray, setListItemArray] = useState(
    new Array(10).fill("Текст задачи")
  );

  const addNewItem = () => {
    setListItemArray([...listItemArray, "Новая задача"]);
  };

  return (
    <>
      <Header />
      <button onClick={addNewItem}>add</button>
      <List listItemArray={listItemArray}/>
    </>
  );
}

export default App;
