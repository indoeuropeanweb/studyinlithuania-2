"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({heading}) => {
    const pathname = usePathname();
    const [firstPath, secondPath, thirdPath] = pathname.split("/").filter(Boolean)
   
  return (
    <section className='bg-[#eaeff2] py-5 px-10'>
      <div className='mx-auto max-w-6xl'>
        <div>
        <ul className='flex items-center'>
            <li><Link href={'/'} className={`${pathname === "/" ? "text-gray-500": "text-gray-800 hover:underline"}`}>Home</Link></li>
            {firstPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}`} className={`${pathname === `/${firstPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{firstPath}</Link></li></>}
            {secondPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}/${secondPath}`} className={`${pathname === `/${firstPath}/${secondPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{secondPath}</Link></li></>}
            {thirdPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}/${secondPath}/${thirdPath}`} className={`${pathname === `/${firstPath}/${secondPath}/${thirdPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{thirdPath}</Link></li></>}
        </ul>
        <div className='mt-10 flex justify-center items-center'>
          {heading && <h2 className='font-aino text-sm md:text-md font-bold'>{heading}</h2>}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Breadcrumb