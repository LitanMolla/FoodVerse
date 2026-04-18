'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const SearchFoods = () => {
    const pathname = usePathname()
    const seartchParams = useSearchParams()
    const router = useRouter()
    const [search, setSearch] = useState('')
    const params = new URLSearchParams(seartchParams)
    const handleSearch = ()=>{
        if(search){
            params.set('search', search)
        } else {
            params.delete('search')
        }
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="flex items-center gap-2 max-w-lg w-full">
            <input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search Foods" type="text" className="bg-gray-100 border border-gray-300 px-4 py-2.5 flex-1 rounded-lg outline-0" />
            <button onClick={handleSearch} className="py-2.5 rounded-lg bg-green-600 text-gray-100 px-4 cursor-pointer duration-300 hover:bg-green-700">Search</button>
        </div>
    )
}

export default SearchFoods;