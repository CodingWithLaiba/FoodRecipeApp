export default function FoodItem({ food,setFoodId }) {
  return (
    <div className="w-90 rounded-lg shadow-xl overflow-hidden m-5 font-sans">
      <img className="w-full h-auto" src={food.image} alt="" />
      <div className="font-sans text-center mt-3">
        <p className="font-semibold text-lg">{food.title}</p>
      </div>
      <div className="m-5 flex justify-around items-center text-center">
        
        <button onClick={()=>setFoodId(food.id)} className="bg-green-500 border-none rounded-lg text-white text-sm font-semibold p-2.5 cursor-pointer">
          View Recipe
        </button>
      </div>
    </div>
  );
}
