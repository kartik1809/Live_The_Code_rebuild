'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Collaborators = () => {
    const collaborators = [
        { src: '/anvesh.png', alt: 'Anvesh' },
        { src: '/cc_bv.png', alt: 'CC BV' },
        { src: '/cc_mit.png', alt: 'CC MIT' },
        { src: '/cdao.png', alt: 'CDAO' },
        { src: '/csi.png', alt: 'CSI' },
        { src: '/eve.png', alt: 'EVE' },
        { src: '/gdsc.png', alt: 'GDSC' },
        { src: '/gfg_abes.png', alt: 'GFG ABES' },
        { src: '/gfg.png', alt: 'GFG' },
        { src: '/iee.png', alt: 'IEE' },
    ];

    return (
        
        <div id='collaborators'>
            <h1 className='text-center text-3xl text-white md:text-4xl lg:text-5xl'>Collaborators</h1>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 p-8 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:p-24 lg:gap-8'>
                    {collaborators.map((collaborator, index) => (
                        <motion.div
                            key={index}
                            className='flex justify-start items-center'
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }} 
                        >
                            <Image
                                src={collaborator.src}
                                alt={collaborator.alt}
                                width={200}
                                height={200}
                                className='rounded-lg' 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collaborators;
