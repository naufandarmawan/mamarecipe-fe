"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/base/button'
import { usePathname, useRouter } from 'next/navigation'
import { getCookie } from '@/service/auth'
import { toast } from 'sonner'


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter()
    const pathname = usePathname();

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getCookie('token');
            // console.log('navbar:', token);

            // console.log(token);

            if (token) {
                setIsLoggedIn(true);
            }
            setIsLoading(false);
        };

        fetchToken();

        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        // // const token = localStorage.getItem('token');
        // console.log('navbar:', token);

        // if (token) {
        //     setIsLoggedIn(true);
        // }
        // setIsLoading(false);
    }, []);

    const handleLogin = () => {
        router.push('/login')
    };

    const handleLogout = async () => {
        const logout = async () => {
            try {
                const response = await fetch(`/v1/auth/logout`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error('Logout failed')
                }

                const result = await response.json();

                return result

            } catch (err) {
                return Promise.reject(err.message);
            }
        }

        const result = await logout()

        toast.success(result.message)
        setIsLoggedIn(false);

    };

    return (
        <div className={`fixed flex p-6 px-24 w-full max-lg:justify-between max-lg:px-4 max-lg:z-[100] ${scrollPosition > 1 ? 'bg-white' : 'bg-transparent'}`}>

            <div className="navbar-start hidden max-lg:block max-lg:w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href='/' className={pathname === "/" ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-opacity-80 text-lg text-[#2E266F]'}>Home</Link>
                        </li>
                        <li>
                            <Link href='/recipes' className={pathname.startsWith('/recipes') ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-opacity-80 text-lg text-[#2E266F]'}>Recipes</Link>
                        </li>
                        <li>
                            <Link href='/add' className={pathname === "/add" ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-opacity-80 text-lg text-[#2E266F]'}>Add Recipe</Link>
                        </li>
                        <li>
                            <Link href='/profile' className={pathname === "/profile" ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-opacity-80 text-lg text-[#2E266F]'}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className="navbar-start hidden max-lg:block max-lg:w-fit">
                <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[100] z- p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/' className='font-medium text-lg text-[#2E266F]'>Home</a>
                        </li>
                        <li>
                            <a href='/recipes' className='font-medium text-lg text-[#2E266F]'>Recipes</a>
                        </li>
                        <li>
                            <a href='/add' className=' font-medium text-lg text-[#2E266F]'>Add Recipe</a>
                        </li>
                        <li>
                            <a href='/profile' className=' font-medium text-lg text-[#2E266F]'>Profile</a>
                        </li>
                    </ul>
                </div>
            </div> */}

            <div className='w-full max-lg:w-fit max-lg:hidden'>
                <ul className="menu menu-vertical lg:menu-horizontal p-0 gap-4">
                    <li>
                        <Link href='/' className={pathname === '/' ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-lg text-[#2E266F] text-opacity-80'}>Home</Link>
                        <div className={pathname === '/' ? 'w-full h-1 !p-0 bg-[#2E266F]' : 'hidden'}></div>
                    </li>
                    <li>
                        <Link href='/recipes' className={pathname.startsWith('/recipes') ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-lg text-[#2E266F] text-opacity-80'}>Recipes</Link>
                        <div className={pathname.startsWith('/recipes') ? 'w-full h-1 !p-0 bg-[#2E266F]' : 'hidden'}></div>
                    </li>
                    <li>
                        <Link href='/add' className={pathname === '/add' ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-lg text-[#2E266F] text-opacity-80'}>Add Recipe</Link>
                        <div className={pathname === '/add' ? 'w-full h-1 !p-0 bg-[#2E266F]' : 'hidden'}></div>
                    </li>
                    <li>
                        <Link href='/profile' className={pathname === '/profile' ? 'font-semibold text-lg text-[#2E266F]' : 'font-medium text-lg text-[#2E266F] text-opacity-80'}>Profile</Link>
                        <div className={pathname === '/profile' ? 'w-full h-1 !p-0 bg-[#2E266F]' : 'hidden'}></div>
                    </li>
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
                <Button text="Log out" className='!bg-red-600 hover:!bg-red-700 !border-red-700 hover:!border-red-800' onClick={handleLogout} />
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