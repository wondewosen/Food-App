import { useState } from 'react'
import Search from "./component/search"
import FoodList from "./Foodlist"
import  Nav from "./component/Nav"
import "./App.css";
import Container from './component/container';
import FoodDetail from './component/FoodDetails';
import InnerContainer from './component/InnerContainer'
import styles from "./component/container.module.css"


function App() {
const [foodData, setfoodData] = useState([])
const [foodId, setfoodId] = useState("658920");
  return (
    <div className="App">
      <Nav />
      <Search foodData = {foodData} setfoodData = {setfoodData} />
<div className={styles.parentContainer} >

   <div className={styles.leftContainer}>
     <FoodList  foodData = {foodData} setfoodId = {setfoodId} />
   </div>  
   <div  className={styles.rightContainer}>
     <FoodDetail foodId={foodId} />
   </div>

</div> 
   
 </div>
  )
}

export default App
