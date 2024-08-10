import FoodItem from "./FoodItem";

export default function FoodList({foodData, setfoodId}){
   return (<div>
 {foodData.map((food)=>(
    
    <FoodItem key={food.id} setfoodId = {setfoodId} food = {food}/>))}

    </div>)
}