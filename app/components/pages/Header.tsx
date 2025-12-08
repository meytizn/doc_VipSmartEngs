import React from 'react'
import Image from "next/image";


const Header = () => {
  return (
    <div className=' h-[100px] text-white bg-[#D1011B] w-full flex flex-row justify-between content-center items-center p-1 '>
 

    

<Image
          className="w-[100px] "
          src="/images/vedavski.png"   //it refers to public/
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
  )
}

export default Header
