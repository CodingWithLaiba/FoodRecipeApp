import { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [foodData,setFoodData] = useState([]);
  return (
    <div>App
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food)=>(
        <h1 key={food.id}>{food.title}</h1>
      ))}
    </div>
  )
}
