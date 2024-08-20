import React from 'react'
import { Vortex } from './ui/vortex'
const CTA = () => {
    return (
        
        <div>
            <h3 className='text-3xl text-white text-center mt-8 font-semibold md:text-5xl'>Join The Journey</h3>
            <p className='text-md mt-4 text-slate-300 text-center'>Be a part of an exciting Community and embrace the experience.</p>
            <div className='flex flex-col sm:flex-row mt-8 justify-center items-center gap-4'>
                <button className='bg-[#9333ea] text-white  p-2 px-8 rounded-2xl'>Apply-With-Devfolio</button>
                <button className='bg-[#3c3b3d] border border-slate-600 p-2 px-4 rounded-2xl text-white'>Join Discord</button>
            </div>
        </div>
        
    )
}

export default CTA
