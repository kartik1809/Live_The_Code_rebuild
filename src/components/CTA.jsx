import React from 'react'
import { Vortex } from './ui/vortex'
const CTA = () => {
    return (
        
        <div>
            <h3 className='text-3xl text-white text-center mt-8 font-semibold md:text-5xl'>Join The Journey</h3>
            <p className='text-md mt-4 text-slate-300 text-center'>Be a part of an exciting Community and embrace the experience.</p>
            <div className='flex flex-col sm:flex-row mt-8 justify-center items-center gap-4'>
                <a className='bg-[#9333ea] text-white  p-2 px-8 rounded-2xl' href='https://live-the-code-3.devfolio.co/' target='_blank'  >Apply-With-Devfolio</a>
                <a className='bg-[#3c3b3d] border border-slate-600 p-2 px-4 rounded-2xl text-white' href='https://discord.com/invite/UncmJvGh'>Join Discord</a>
            </div>
        </div>
        
    )
}

export default CTA
