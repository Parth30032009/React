import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import FoodCard from "./Components/FoodCard";
import foodData from "./Components/config";


function AppLayout() {
  let [FoodList,setFoodList]=useState(foodData)

  function onChangeSearchHandler(e) {
    
    let inputValue=e.target.value
    let filteredFoodList=foodData.filter((food)=>{
      return food.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    

    
    setFoodList(filteredFoodList)

  }
  
  return (
    <>
      <Header onChangeSearchHandler={onChangeSearchHandler}/>

      <FoodCard FoodData={FoodList}></FoodCard>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
