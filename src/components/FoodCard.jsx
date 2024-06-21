import { useRouter } from "next/router";

export default function FoodCard({ food, isDetail }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`food/${food.id}`);
  };

  return (
    <div
      className="w-[300px] h-[300px] bg-gray-300 flex flex-col p-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 rounded-xl cursor-pointer max-sm:w-[230px] max-sm:h-[230px] hover:scale-105 transition-all duration-300 ease-in-out"
      {...(!isDetail && { onClick: handleClick })}
    >
      <img
        className="w-[150px] h-[150px] object-cover self-center rounded-md max-sm:w-[100px] max-sm:h-[100px]"
        src={food.imageUrl}
        alt=""
      />
      <h2 className="mt-2 text-lg font-bold text-center text-blue-300 max-sm:text-sm max-sm:font-medium">
        {food.name}
      </h2>
      <p className="flex flex-col flex-wrap gap-1 mt-2 text-xs text-white max-sm:text-[10px] max-sm:flex-row">
        <b>Deskripsi:</b> {food.description}
      </p>
      <p className="flex flex-col flex-wrap gap-1 text-xs text-white max-sm:text-[10px] max-sm:flex-row">
        <b>Bahan:</b> {food.ingredients.join(", ")}
      </p>
    </div>
  );
}
