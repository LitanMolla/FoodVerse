'use client'

import FoodCard from "@/components/ui/FoodCard"
import Loader from "@/components/ui/Loader"
import { useEffect, useState } from "react"

const FoodPage = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        setLoading(true)
        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`).then(res => res.json()).then(data => {
            setFoods(data.data)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }, [search, category])
    const handleSearch = (event) => {
        event.preventDefault()
        const value = event.target.value.toLowerCase();
        setSearchValue(value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    return (
        <div className='container py-10'>

            <h3 className='text-3xl font-bold text-center'>Total Foods: {foods?.length}</h3>
            <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
                <div className="flex items-center gap-2 max-w-lg w-full">
                    <input onChange={handleSearch} placeholder="Search Foods" type="text" className="bg-gray-100 border border-gray-300 px-4 py-2.5 flex-1 rounded-lg outline-0" />
                    <button onClick={() => setSearch(searchValue)} className="py-2.5 rounded-lg bg-green-600 text-gray-100 px-4 cursor-pointer duration-300 hover:bg-green-700">Search</button>

                </div>
                <div className="">
                    <select onChange={handleCategoryChange} name="" id="" className="bg-gray-100 border border-gray-300 px-4 py-3 outline-0 rounded-lg">
                        <option value="">All</option>
                        <option value="dish">Dish</option>
                        <option value="burger">Burger</option>
                        <option value="biriyani">Biriyani</option>
                        <option value="beverage">Beverage</option>
                    </select>
                </div>
            </div>
            {loading ? <Loader/> : foods?.length === 0 && <p className="text-center text-gray-500 mt-10">No foods found.</p>}
            {loading || foods?.length === 0 ? null : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {foods?.map(food => (<FoodCard key={food._id} food={food} />))}
            </div>}
        </div>
    )
}

export default FoodPage