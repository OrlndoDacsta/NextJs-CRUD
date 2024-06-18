import axios from "axios";
import { useRouter } from "next/router";

export default function ButtonDelete({ food }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await axios
      .delete(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      )
      .then((res) => {
        if (res.data.code === "200") {
          alert(res.data.message);
        }
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
}
