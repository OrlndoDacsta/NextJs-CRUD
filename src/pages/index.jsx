import axios from "axios";
import FoodCard from "../components/FoodCard.jsx";
import BaseLayout from "@/layout/BaseLayout.jsx";

export async function getStaticProps() {
  const res = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
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
    props: { foods: data },
  };
}

export default function Home({ foods }) {
  return (
    <div className=" bg-[url('/img/bg.jpg')] min-h-screen bg-cover">
      <BaseLayout>
        <div className="mx-auto mb-5 w-80 max-sm:w-60">
          <marquee className="text-3xl font-bold text-center text-white max-sm:text-xl">
            List Menu Makanan
          </marquee>
        </div>
       
          <div className="grid items-center justify-center grid-cols-3 gap-4 ml-14 max-sm:grid-cols-1">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        
      </BaseLayout>
    </div>
  );
}
