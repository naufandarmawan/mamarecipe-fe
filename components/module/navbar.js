import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='fixed flex p-6 px-24 w-full'>
            <div className='w-full'>
                <ul className="menu menu-vertical lg:menu-horizontal p-0 gap-4">
                    <li ><a href='/' className='active font-medium text-lg text-[#2E266F]'>Home</a></li>
                    <li><a href='/add' className=' font-medium text-lg text-[#2E266F]'>Add Recipe</a></li>
                    <li><a href='/profile' className=' font-medium text-lg text-[#2E266F]'>Profile</a></li>
                </ul>
            </div>

            <Link className='flex items-center gap-2' href={'/login'}>
                <img className='size-12' src="/login.svg" />
                <p className='font-medium text-base text-white'>Login</p>
            </Link>
        </div>
    )
}

export default Navbar