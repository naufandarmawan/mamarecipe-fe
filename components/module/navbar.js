import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/add">Add Recipe</Link></li>
            <li><Link href="/profile">Profile</Link></li>
        </ul>
    )
}

export default Navbar