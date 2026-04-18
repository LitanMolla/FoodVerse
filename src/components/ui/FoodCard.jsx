import Image from "next/image";

export default function FoodCard({ food }) {
  const {
    dish_name,
    image_link,
    cuisine,
    rating,
    price,
    approximate_nutrition_per_serving: { calories, protein }
  } = food;

  return (
    <div className="">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-full overflow-hidden">
        {/* Image */}
        <div className=" w-full ">
          <Image
            src={image_link}
            alt={dish_name}
                width={400}
                height={300}
            className="object-contain p-4 h-60 w-full"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">
            {dish_name}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-1">
            {cuisine}
          </p>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 text-sm">
            {"★".repeat(rating)}
            <span className="text-gray-500 ml-2">({rating}.0)</span>
          </div>

          {/* Nutrition */}
          <div className="text-xs text-gray-500">
            {calories} • {protein} protein
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-gray-800">
              ৳{price}
            </span>
            <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

