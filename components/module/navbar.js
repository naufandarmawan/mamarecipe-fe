"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/base/button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = () => {
        router.push('/login')
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);

    };

    return (
        <div className='fixed flex p-6 px-24 w-full'>
            <div className='w-full'>
                <ul className="menu menu-vertical lg:menu-horizontal p-0 gap-4">
                    <li><a href='/' className='active font-medium text-lg text-[#2E266F]'>Home</a></li>
                    <li><a href='/recipes' className='font-medium text-lg text-[#2E266F]'>Recipes</a></li>
                    <li><a href='/add' className=' font-medium text-lg text-[#2E266F]'>Add Recipe</a></li>
                    <li><a href='/profile' className=' font-medium text-lg text-[#2E266F]'>Profile</a></li>
                </ul>
            </div>

            {isLoading ? (
                <button className="btn bg-slate-800 bg-opacity-80">
                    <span className="loading loading-spinner text-white"></span>
                    <p className='font-medium text-sm text-white'>Loading</p>
                </button>
                
                // <div className='flex items-center gap-2'>
                //     <span className="loading loading-spinner text-slate-800"></span>
                //     <p className='font-medium text-sm text-slate-800'>Loading</p>
                // </div>
            ) : isLoggedIn ? (
                <Button text="Log out" className='bg-red-700 hover:bg-red-800 border-red-800 hover:border-red-900' onClick={handleLogout} />
            ) : (

                // <Link className='flex items-center gap-2' href={'/login'}>
                //     <img className='size-8' src="/login.svg" alt="Login" />
                //     <p className='font-medium text-base text-white'>Login</p>
                // </Link>

                <button onClick={handleLogin} className="btn border-none bg-slate-800 bg-opacity-20 hover:bg-slate-800 hover:bg-opacity-25">
                    <img className='size-6' src="/login.svg" alt="Login" />
                    <p className='font-medium text-base text-white'>Login</p>
                </button>
            )}

        </div>
    )
}

export default Navbar