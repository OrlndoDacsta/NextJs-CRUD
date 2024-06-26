import FoodForm from "@/components/FoodForm";
import BaseLayout from "@/layout/BaseLayout";

export default function Create() {
  return (
    <div className="bg-[url('/img/bg.jpg')] min-h-screen bg-cover">
      <BaseLayout>
        <div className="mx-auto mb-5 w-80 max-sm:w-60">
          <marquee className="text-3xl font-bold text-center text-white max-sm:text-xl">
            Silahkan Tambahkan Menu Makanan
          </marquee>
        </div>
        <div className="flex justify-center">
          <FoodForm />;
        </div>
      </BaseLayout>
    </div>
  );
}
