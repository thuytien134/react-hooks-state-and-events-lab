import React from "react";
import {useState} from "react"

function Item({ name, category }) {

  const [isAdded,setisAdded] = useState(false)
const Itemclass = isAdded ? "in-cart" : ""

  function handleClick(){
    setisAdded((isAdded) => !isAdded)
  }


  return (
    <li className={Itemclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdded ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
