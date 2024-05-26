import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className='bg-yellow-400'>
            <div className='flex flex-col gap-10 p-40 items-center max-lg:p-4 max-lg:py-10 max-lg:gap-6'>
                <p className='font-normal text-7xl text-[#2E266F] text-center max-lg:text-left max-lg:text-5xl'>Eat, Cook, Repeat</p>
                <p className='font-medium text-2xl text-[#707070] text-center max-lg:text-left'>Share your best recipe by uploading here!</p>
            </div>
            <ul className='flex gap-6 justify-center p-16 max-lg:flex-col max-lg:p-4 max-lg:gap-4 max-lg:pb-16'>
                <li><Link className='font-medium text-base text-[#707070]' href="">Product</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Company</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Learn More</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Get In Touch</Link></li>
            </ul>

        </div>
    )
}

export default Footer