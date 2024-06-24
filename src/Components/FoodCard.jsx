import FoodCardLayout from "./FoodCardLayout"


function FoodCard({FoodData}) {
   if (FoodData.length === 0) {
     return <h1>No Food Found</h1>
   }

  return (
    <div className="Container row-cols-3">
        
      {FoodData.map((food) => (
        
        <FoodCardLayout
        
          key={food.id}
          imageUrl={food.image}
          Title={food.name}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
}

export default FoodCard;
