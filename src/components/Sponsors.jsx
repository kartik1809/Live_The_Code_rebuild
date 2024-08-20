import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'

import Image from 'next/image'
const Sponsors = () => {
    return (
        <div className='mt-32'>
            <h3 className='text-white md:text-3xl text-2xl text-center font-semibold'>Platinum</h3>
            
            <ContainerScroll >
                <div className='grid grid-rows-1 grid-cols-3  gap-4 p-2 md:gap-12 justify-center items-center'>
                    <Image src='/dataverse.png' width={200} height={200} alt='sponsor' />
                    <Image src='/devfolio.png' width={200} height={200} alt='sponsor' />
                    <Image src='/polygon.png' width={200} height={200} alt='sponsor' />

                </div>
            </ContainerScroll>
            <h3 className='text-white md:text-3xl text-2xl text-center font-semibold'>Gold</h3>
            <ContainerScroll >
                <div className='flex w-full grid-rows-1 grid-cols-3 p-2  gap-2 justify-around items-center'>
                    <Image src='/quil.png' width={100} height={100} alt='sponsor' />
                    <Image  src='/hyper.png' width={200} height={200} alt='sponsor' />
                    <Image src='/gmc.png' width={100} height={100} alt='sponsor' />
                </div>
            </ContainerScroll>
            <h3 className='text-white md:text-3xl text-2xl text-center font-semibold'>Silver</h3>
            <ContainerScroll >
                <div className='grid grid-rows-1 grid-cols-3 p-2  gap-2 md:gap-12 justify-center items-center'>
                    <Image src='/filecoin.png' width={200} height={200} alt='sponsor' />
                    <Image src='/replit.png' width={200} height={200} alt='sponsor' />
                    <Image src='/solana.png' width={200} height={200} alt='sponsor' />

                </div>
            </ContainerScroll>
            <h3 className='text-white md:text-3xl text-2xl text-center font-semibold'>Bronze</h3>
            <ContainerScroll >
                <div className='grid grid-rows-1 grid-cols-3 p-2 gap-8 md:gap-12 justify-center items-center'>
                    <Image  src='/intb.png' width={200} height={200} alt='sponsor' />
                    <Image  src='/axure.png' width={200} height={200} alt='sponsor' />
                    <Image  src='/xyz.png' width={200} height={200} alt='sponsor' />

                </div>
            </ContainerScroll>
        </div>
    )
}

export default Sponsors
