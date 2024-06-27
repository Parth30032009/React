import FoodCardLayout from "./FoodCardLayout";

function FoodCard({ FoodData }) {
 
  

  return (
    <div className="Container row-cols-3">
      {FoodData.map((food, index) => (
      food.card?.card?.info?.name?  <FoodCardLayout {...food} key={index} />:null
      ))}
    </div>
  );
}

export default FoodCard;
