import FilterFoods from '@/components/ui/FilterFoods';
import FoodCard from '@/components/ui/FoodCard';
import SearchFoods from '@/components/ui/SearchFoods';
import React from 'react'
const getFoods = async (search = '', category = '') => {
    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,{cache: 'no-store'})
        const data = await res.json()
        return data.data;
    } catch (error) {
        console.log(error)
    }
}
const ServerPage = async ({searchParams}) => {
    const params = await searchParams;
    // console.log(await getFoods())
    console.log(params)
    const foods = await getFoods(params.search, params.category)
    // console.log(foods)
    return (
        <div className='container py-10'>
            <h2 className='text-3xl font-bold text-center'>Total Foods: {foods?.length} </h2>
            <div className="flex justify-between items-center mt-6 flex-wrap gap-4 my-6">
                <SearchFoods/>
                <FilterFoods/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods?.map(food => (<FoodCard key={food._id} food={food} />))}
            </div>
        </div>
    )
}

export default ServerPage