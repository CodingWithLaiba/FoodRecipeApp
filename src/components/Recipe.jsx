import { useEffect, useState } from "react";
import RecipeIngredients from "./RecipeIngredients";

export default function Recipe({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);

      console.log("Food ID:", foodId);
      console.log("Recipe Data:", data);
      setFood(data);
      setLoading(false);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div>
      <div className="max-w-150 my-5 mx-auto p-5 shadow-xl rounded-lg font-sans">
        <h1 className="text-3xl font-bold mb-6">{food.title}</h1>
        <img
          className="max-w-full h-auto rounded-md mb-2.5"
          src={food.image}
          alt="Food_image"
        />
        <div className="mb-2 flex justify-between items-center">
          <span>
            <strong>🕓 {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong>{food.pricePerServing / 100} Per Servings </strong>
          </span>
        </div>
        <div>
          <RecipeIngredients food={food} isLoading={isLoading}/>
        </div>
        <div className="p-0 rounded-md ">
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="ml-6 text-gray-500 list-decimal">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions?.[0]?.steps?.map((step, index) => (
                <li className="my-2.5 mx-0" key={index}>
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
