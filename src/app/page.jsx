import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-10">
      <div className="">
        < h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to FoodVerse
        </h1>
        <div className="flex justify-center items-center gap-6 mt-6">
          <Link href='/food-client' className="bg-gray-900 text-gray-100 px-5 py-2.5 rounded-lg duration-300 hover:bg-green-600">Food Client</Link>
          <Link href='/food-server' className="bg-gray-900 text-gray-100 px-5 py-2.5 rounded-lg duration-300 hover:bg-green-600">Food Server</Link>
        </div>
      </div>
    </div>
  );
}
