import { useOutletContext } from "react-router-dom";
import FoodCard from "./FoodCard.jsx";
import ShimmerLayout from "./ShimmerLayout";
function Body() {
  const {FoodData,loading}=useOutletContext()
  return (
    <>
      {loading ? (
       <div className="d-flex">
       {Array.from({ length: 10 }).map((_, index) => (
         <ShimmerLayout key={index} />
       ))}
     </div>
      ) : (
        <FoodCard FoodData={FoodData} />
      )}
    </>
  );
}

export default Body;

      
      
