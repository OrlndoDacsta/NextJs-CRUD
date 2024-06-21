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
      ingredients: "",
      description: "",
    }
  );
  const [successMessage, setSuccessMessage] = useState("");

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

    if (res.data.code === "200") {
      setSuccessMessage(
        isEdit
          ? "Menu makanan berhasil diubah!"
          : "Menu makanan berhasil ditambahkan!"
      );
      setTimeout(() => {
        setSuccessMessage("");
        router.push("/");
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleClick}
      className="w-[400px] {isEdit ? 'h-[400px]' : 'h-[450px]'} bg-gray-300 flex flex-col p-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 rounded-xl gap-5 max-sm:w-[230px] max-sm:h-[320px]'}"
    >
      {isEdit ? (
        <h1 className="text-2xl font-bold text-center text-white max-sm:text-sm max-sm:font-semibold">
          Edit Menu Makanan
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-center text-white max-sm:text-sm max-sm:font-semibold">
          Tambah Menu Makanan
        </h1>
      )}
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="Nama Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500 max-sm:text-xs"
      />
      <input
        value={formData.imageUrl}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
        }
        placeholder="Gambar/Foto Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500 max-sm:text-xs"
      />
      <input
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
        placeholder="Deskripsi Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500 max-sm:text-xs"
      />
      <input
        value={formData.ingredients}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, ingredients: e.target.value }))
        }
        placeholder="Bahan Makanan"
        className="p-2 text-white bg-transparent border-b focus:outline-none focus:border-blue-500 max-sm:text-xs"
      />
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 max-sm:text-xs"
        type="submit"
      >
        {isEdit ? "Edit" : "Tambah"}
      </button>
      {isEdit && <ButtonDelete food={food} />}
      {successMessage && (
        <div className="w-full p-2 bg-green-500 backdrop-filter backdrop-blur-md bg-opacity-10">
          <p className="mt-4 text-center text-green-500">{successMessage}</p>
        </div>
      )}
    </form>
  );
}
