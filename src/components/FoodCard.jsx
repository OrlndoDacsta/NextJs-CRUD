import { useRouter } from "next/router";

export default function FoodCard({ food }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`food/${food.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] bg-red-500" onClick={handleClick}>
      <img src={food.imageUrl} alt="" />
      <h2>{food.name}</h2>
      <p>Description: {food.description}</p>
      <p>Ingredients: {food.ingredients.join(", ")}</p>
    </div>
  );
}
