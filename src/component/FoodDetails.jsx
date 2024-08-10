//import Container from "./container";


import { useEffect, useState } from "react";
import styles from "./container.module.css"

export default function FoodDetail({foodId}){
    const [food, setFood] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
   const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "230912ae5777408ba7dfa4700285da6a";
  // const API_KEY = "ee00ca607c7f41f099a148c3dca67d3d";
    useEffect(()=>{

      async  function fetchFood(){
        const res =  await fetch(`${URL}?apiKey=${API_KEY}`)
        const data = await res.json();
        console.log(data)
        setFood(data);
        setIsLoading(false);
        }
        fetchFood()
    },
       
    [foodId])
    return <div className={styles.recipeDetail}>
       <div>
        <h1 className={styles.titleName}>{food.title} </h1>
       <img className={styles.images} src={food.image} alt="" />
       </div>
       <div className={styles.recipeDetails}>
        <strong > ⌚ {food.readyInMinutes} Minutes </strong>
        <span>
            <strong>Serves{food.servings} 👪</strong>
        </span>
        <span>
        <strong>    {food.vegan ? "Vegan": "Non Vegan"}</strong>
        </span>
        <span>
        <strong> {food.vegetarian ? " 🥕 Vegetarian": " 🍖 Non vegetarian"}</strong>
        </span>
       </div>
       <div>
       <strong>   $ {(food.pricePerServing/100) .toFixed(2)} Per Serving </strong> 
       </div>

       <h2>Ingridients</h2>
       <div>
       {IsLoading ? (<p>IsLoading...</p>
        ):food.extendedIngredients.map((item)=><div className={styles.ingredients}>
        
        <div className={styles.ImageContainer} >
       
         <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />  
         </div>
      <div className={styles.nameContainer} >
      <div className={styles.name}>{item.name}</div> 
      <div className={styles.ItemAmount}>{item.amount} {item.unit}</div>
       </div>
       </div>)} 
        
       </div>
        <h2>Instructions</h2>
        <div className={styles.recipeinstructions}>
         <ol> {IsLoading ? (<p>IsLoading...</p>
        ): (
         food.analyzedInstructions[0].steps.map((step)=><li>
            {step.step}
         </li>))} 
         </ol>
       </div>
    </div>
}