import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="my-5 mx-auto w-80 relative">
     <h3 className="text-xl font-semibold my-3">Search Food</h3> 
      <input className=" border border-[#e3e4dc] py-2.5 px-5 w-full text-lg"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
