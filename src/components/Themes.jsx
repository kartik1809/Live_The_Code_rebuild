import React from 'react'
import { BentoGridDemo } from './BentoGrid'
import { Meteors } from './ui/meteors'
const Themes = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-5xl text-center text-white'>Themes</h2>
            <p className=' mb-12 text-center text-slate-400 mt-4'>Mark the Dates to set yourself on fire</p>
            <BentoGridDemo />
        </div>
    )
}

export default Themes
