"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({heading}) => {
    const pathname = usePathname();
    const [firstPath, secondPath, thirdPath] = pathname.split("/").filter(Boolean);

    const f = (firstPath) => {
      return firstPath.replace(/\b\w/g, (char) => char.toUpperCase());
    };
   
    const s = (secondPath) => {
      return secondPath.replace(/\b\w/g, (char) => char.toUpperCase());
    };
   
    const t = (thirdPath) => {
      return thirdPath.replace(/\b\w/g, (char) => char.toUpperCase());
    };
   
  return (
    <section className='bg-[#eaeff2] py-5 px-10'>
      <div className='mx-auto max-w-6xl'>
        <div>
        <ul className='flex items-center' id="breadcrumb">
            <li><Link href={'/'} className={`${pathname === "/" ? "text-gray-500": "text-gray-800 hover:underline"}`}>Home</Link></li>
            {firstPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}`} className={`${pathname === `/${firstPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{firstPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></li></>}
            {secondPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}/${secondPath}`} className={`${pathname === `/${firstPath}/${secondPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{secondPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></li></>}
            {thirdPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={`/${firstPath}/${secondPath}/${thirdPath}`} className={`${pathname === `/${firstPath}/${secondPath}/${thirdPath}` ? "text-gray-500": "text-gray-800 hover:underline"}`}>{thirdPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></li></>}
        </ul>
        <div className='mt-10 flex justify-center items-center'>
          {heading && <h1 className='font-aino text-md md:text-base font-bold'>{heading}</h1>}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Breadcrumb