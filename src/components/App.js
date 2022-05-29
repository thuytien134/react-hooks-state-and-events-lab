import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  const [isLight,setisLight] = useState(true)
 
  const appClass = isLight ? "App light" : "App dark" 

  function handleClick(){
    setisLight((isLight)=>!isLight)
    debugger
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "light Mode" : "dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
