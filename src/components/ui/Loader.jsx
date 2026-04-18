import React from 'react'
import './Loader.css'
const Loader = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div class="loader">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>

        </div>
    )
}

export default Loader