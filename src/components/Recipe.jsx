import { useEffect, useState } from "react";

export default function Recipe({ foodId }) {
  const [food, setFood] = useState({});
  const URL = "https://api.spoonacular.com/recipes/{foodId}/information";
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?api_Key=${API_KEY}`);
      const data = res.json;
      console.log(data);
      setFood(data);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="Food_image" />
        <div>
          <span>
            <strong>🕓 {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦</strong>Serves {food.servings}{" "}
          </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐄 Vegan" : ""}</span>
        </div>
        <div>
          $<span>{food.pricePerServing / 100} Per Servings</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {food.analyzedInstructions[0].steps.map((step,index)=>(
            <li key={index}>{step.step}</li>
        ))}
      </div>
    </div>
  );
}
