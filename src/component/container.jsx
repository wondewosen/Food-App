import FoodItem from "../FoodItem"
import styles from "./container.module.css"
import FoodDetail from "./FoodDetails"

export default function Container({children}){
    return <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>    
      {children}
        </div>  
        <div> okay </div> 
    </div>
}