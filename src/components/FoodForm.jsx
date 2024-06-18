import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FoodForm({ defaulFormData, isEdit }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    defaulFormData || {
      name: "",
      imageUrl: "",
      ingredients: "",
      description: "",
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const ingredientsArray = formData.ingredients.split(",");
    const res = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: formData.name,
        imageUrl: formData.imageUrl,
        description: formData.description,
        ingredients: ingredientsArray,
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    if (res.data.code === "200") router.push("/");
  };

  return (
    <form onSubmit={handleClick}>
      {isEdit ? <h1>Edit Food</h1> : <h1>Create Food</h1>}
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="Food Name"
      />
      <input
        value={formData.imageUrl}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
        }
        placeholder="Image Food"
      />
      <input
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
        placeholder="Description Food"
      />
      <input
        value={formData.ingredients}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, ingredients: e.target.value }))
        }
        placeholder="Ingredients Food"
      />
      <button type="submit">{isEdit ? "Update Food" : "Create Food"}</button>
    </form>
  );
}
