import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Pre
    useEffect(() => {
        if (showMobileMenu) {
            document.styleSheets.overflow = 'hidden'
        } else {
            document.styleSheets.overflow = 'auto'
        }
        return () => {
            document.styleSheets.overflow = 'auto';
        };
    }, [showMobileMenu])
    return (
        <div className='absolute top-0 left-0 w-full z-index-10'>

            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent bor'>
                <span className='text-[30px] text-blue-50'>Real Estate Portal</span>
                <ul className='hidden md:flex gap-7 text-white text-[18px]'>
                    <a className='cursor-pointer hover:text-green-400' href="#Header">Home</a>
                    <a className='cursor-pointer hover:text-green-400' href="#About">About</a>
                    <a className='cursor-pointer hover:text-green-400' href="#Projects">Projects</a>
                    <a className='cursor-pointer hover:text-green-400' href="#Testimonials">Testimonials</a>
                </ul>

                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>

                <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
                </div>
                <ul  className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Header">Home</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#About">About</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Testimonials">Testimonials</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
