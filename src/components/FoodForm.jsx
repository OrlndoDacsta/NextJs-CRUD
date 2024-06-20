import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import ButtonDelete from "./ButtonDelete";

export default function FoodForm({ defaulFormData, isEdit, food }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    defaulFormData || {
      name: "",
      imageUrl: "",
      ingredients: [],
      description: "",
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const ingredientsArray = Array.isArray(formData.ingredients)
      ? formData.ingredients
      : formData.ingredients.split(",").map((ingredient) => ingredient.trim());
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
    <form
      onSubmit={handleClick}
      className="w-[400px] {isEdit ? 'h-[400px]' : 'h-[450px]'} bg-gray-300 flex flex-col p-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 rounded-xl gap-5"
    >
      {isEdit ? (
        <h1 className="text-2xl font-bold text-center text-white">
          Edit Menu Makanan
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-center text-white">
          Tambah Menu Makanan
        </h1>
      )}
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="Nama Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500"
      />
      <input
        value={formData.imageUrl}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
        }
        placeholder="Gambar/Foto Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500"
      />
      <input
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
        placeholder="Deskripsi Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500"
      />
      <input
        value={formData.ingredients}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, ingredients: e.target.value }))
        }
        placeholder="Bahan Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500"
      />
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        type="submit"
      >
        {isEdit ? "Edit" : "Tambah"}
      </button>
      {isEdit && <ButtonDelete food={food} />}
    </form>
  );
}
