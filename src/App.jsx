import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";

export default function App() {
  const [foodData,setFoodData] = useState([]);
  return (
    <div>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  )
}
