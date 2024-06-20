import FoodCard from "@/components/FoodCard";
import FoodForm from "@/components/FoodForm";
import BaseLayout from "@/layout/BaseLayout";
import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      },
    }
  );
  const data = res.data.data;
  return {
    props: { food: data },
  };
}

export default function FoodDetails({ food }) {
  return (
    <div className="bg-[url('/img/bg.jpg')] min-h-screen bg-cover">
      <BaseLayout>
      <div className="mx-auto mb-5 w-80">
          <marquee className="text-3xl font-bold text-center text-white">
            Silahkan Edit atau Hapus Menu Makanan
          </marquee>
        </div>
        <div className="flex justify-around gap-5">
          <FoodCard food={food} isDetail={true} />
          <FoodForm
            isEdit={true}
            defaulFormData={{
              name: food.name,
              imageUrl: food.imageUrl,
              ingredients: food.ingredients,
              description: food.description,
            }}
          />
        </div>
      </BaseLayout>
    </div>
  );
}
