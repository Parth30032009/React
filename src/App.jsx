import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  const [FoodList, setFoodList] = useState([]);
  const [FilteredFoodList, setFilteredFoodList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.79400&lng=77.86530&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      const apiData = jsonData.data.cards;
      setFoodList(apiData);
      setFilteredFoodList(apiData);
      setLoading(false);
    } catch (error) {
      setError("Error Occurred");
      setLoading(false);
      console.error("Fetch error:", error);
    }
  }

  function onChangeSearchHandler(e) {
    const inputValue = e.target.value.toLowerCase();
    const filteredFoodList = FoodList.filter((food) =>
      food?.card?.card?.info?.name.toLowerCase().includes(inputValue)
    );
    setFilteredFoodList(filteredFoodList);
  }

  return (
    <>
      <Header onChangeHandler={onChangeSearchHandler} />
      {error ? (
        <h1>{error}</h1>
      ) : (
        <Outlet context={{ FoodData: FilteredFoodList, loading }} />
      )}
      <Footer />
    </>
  );
}

export default App;
