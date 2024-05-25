import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className='bg-yellow-400'>
            <div className='flex flex-col gap-10 p-40 items-center'>
                <p className='font-normal text-7xl text-[#2E266F] text-center'>Eat, Cook, Repeat</p>
                <p className='font-medium text-2xl text-[#707070] text-center'>Share your best recipe by uploading here!</p>
            </div>
            <ul className='flex gap-6 justify-center p-16'>
                <li><Link className='font-medium text-base text-[#707070]' href="">Product</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Company</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Learn More</Link></li>
                <li><Link className='font-medium text-base text-[#707070]' href="">Get In Touch</Link></li>
            </ul>

        </div>
    )
}

export default Footer