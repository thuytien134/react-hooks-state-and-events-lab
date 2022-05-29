import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {
  debugger
  const [selectedCategory, setselectCategory] = useState("All")
  function handleFilterchange(e){
    setselectCategory(e.target.value)
  }
  const itemdisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return true
    }
    else{
      debugger
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterchange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemdisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
