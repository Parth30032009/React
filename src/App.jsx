import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import FoodCard from "./Components/FoodCard";
import ShimmerLayout from "./Components/ShimmerLayout";

function AppLayout() {
  let [FoodList, setFoodList] = useState([]);
  let [FilteredFoodList, setFilteredFoodList] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  function onChangeSearchHandler(e) {
    let inputValue = e.target.value;
    let filteredFoodList = FoodList.filter((food, index) => {
      if (index > 2) {
        return food.card.card.info.name
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      }
    });

    setFilteredFoodList(filteredFoodList);
  }
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.79400&lng=77.86530&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      let jsonData = await data.json();
      let apiData = jsonData.data.cards;
      setFoodList(apiData);
      setFilteredFoodList(apiData);
      setLoading(false);
    } catch (error) {
      setError("Error Occured");
      setLoading(false);
    }
  }


  return (

    <>
      <Header onChangeSearchHandler={onChangeSearchHandler} />
      
      
      {loading ? (
        <div className="d-flex">
          {Array.from({ length: 10 }).map((_, index) => (
            <ShimmerLayout key={index} />
          ))}
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <FoodCard FoodData={FilteredFoodList} />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
