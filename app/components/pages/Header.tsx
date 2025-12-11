"use clinet"
import React from 'react'
import Image from "next/image";
import Carts from '../Carts';


const Header = () => {
  return (
    <>
    <div className='z-40
        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)]
    h-[100px] text-white bg-[#D1011B] w-full flex flex-row justify-between content-center items-center p-1 '>
 

    

<Image
          className="w-[100px] "
          src="/images/vedavski1.jpg"   //it refers to public/
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

<div className='flex flex-row gap-2 md:gap-3 content-center items-center  '>
     <h1> کانال مهندسین باهوش </h1>

<Image
          className="w-[70px] pb-4 md:pb-0   "
          src="/icons/youtubeicon.png"   //it refers to public/
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

          </div>

    </div>

      <Carts/>

</>  )
}

export default Header
