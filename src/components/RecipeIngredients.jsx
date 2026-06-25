export default function RecipeIngredients({ food, isLoading }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-3">Ingredients</h2>
      {isLoading
        ? "Loading..."
        : food?.extendedIngredients?.map((item) => (
            <div className="flex gap-9 justify-between font-semibold items-center list-decimal text-gray-500">
              <div>{item.name}</div>
              <div>
                {item.amount} {item.unit}
              </div>
            </div>
          ))}
    </div>
  );
}
