"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
    const pathname = usePathname();
    const [firstPath, secondPath] = pathname.split("/").filter(Boolean)
   
  return (
        <ul className='flex items-center'>
            <li><Link href={'/'} className={`${pathname === "/" ? "text-gray-500": "text-gray-800 hover:underline"}`}>Home</Link></li>
            {firstPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={'/study'} className={`${pathname === "/study" ? "text-gray-500": "text-gray-800 hover:underline"}`}>Study</Link></li></>}
            {secondPath && <>&nbsp;<IoIosArrowForward />&nbsp;<li><Link href={'/study/universities'} className={`${pathname === "/study/universities" ? "text-gray-500": "text-gray-800 hover:underline"}`}>Universities</Link></li></>}
        </ul>
  )
}

export default Breadcrumb