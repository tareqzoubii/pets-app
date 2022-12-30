import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header () {
     return (
          <header>
               <nav className='flex flex-wrap items-center px-3 bg-cyan-900'>
                    <Link className='inline-flex items-center px-2 mr-4' href='/'>
                         <Image 
                              src='/assets/pets-logo.jpg'
                              width={90}
                              height={50}
                              alt="pets logo"
                              >
                         </Image>
                         <span className='text-xl fonr-bold tracking-wide text-white uppercase'> Pets Shop </span>
                         </Link>
                         <section>
                              <section>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Home</Link>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Services</Link>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/about'>About Us</Link>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Contact Us</Link>
                              </section>
                         </section>
               </nav>
          </header>
     )
}