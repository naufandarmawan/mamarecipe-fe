// "use client"

import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Toaster } from 'sonner'
// import { Provider } from 'react-redux';
// import store from '../../redux/store';
import { Providers } from "../../redux/Providers"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'Mama Recipe',
    description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
    return (
        <Providers>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                    <Toaster richColors position="top-center" />
                </body>
                {/* <Toaster richColors position="top-center" /> */}
            </html>
        </Providers>
    )
}
