'use client'

import { useRouter, useSearchParams } from "next/navigation"

const FilterFoods = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const handleFilter = (event) => {
        const category = event.target.value;
        if (category) {
            params.set('category', category)
        } else {
            params.delete('category')
        }
        router.push(`?${params.toString()}`)
    }
    return (
        <div className="">
            <select onChange={handleFilter} name="" id="" className="bg-gray-100 border border-gray-300 px-4 py-3 outline-0 rounded-lg">
                <option value="">All</option>
                <option value="dish">Dish</option>
                <option value="burger">Burger</option>
                <option value="biriyani">Biriyani</option>
                <option value="beverage">Beverage</option>
            </select>
        </div>
    )
}

export default FilterFoods