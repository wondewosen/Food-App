import { useEffect, useState } from "react"
import styles from "./search.module.css/"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
// In real world application Api key are not bulid like this 
// it is not safe to safe API KEY like file 
//it should have to saved in environment variable  
//const API_KEY = "230912ae5777408ba7dfa4700285da6a";
const API_KEY = "ee00ca607c7f41f099a148c3dca67d3d";


export default function Search({foodData, setfoodData}){

    const [query, setquery] = useState("pizza");

    //syntax of useEffect hook
    useEffect(() => {  
     async function Fetchfood(){
     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)

    // https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=230912ae5777408ba7dfa4700285da6a
       const data = await res.json();
       setfoodData(data.results) 
       console.log(data.results)
    
} Fetchfood();
}, [query])
    return (<div className={styles.searchContainer} >
        <input className={styles.input} type="text" value={query} onChange={(e)=>setquery(e.target.value)} />
    </div>)
}