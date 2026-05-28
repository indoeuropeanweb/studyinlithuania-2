import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={'Short Course Studies in Lithuania'}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Short Courses in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Short courses in Lithuania are designed to help students and professionals gain practical skills,
            industry knowledge, and international learning experience in a shorter duration.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Digital Marketing</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance &amp; Accounting</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Hospitality &amp; Tourism</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Design &amp; Creative Arts</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Healthcare &amp; Public Health</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Language Programs</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose Short Courses in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable course fees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Practical and skill-based learning</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International study exposure</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Short duration and flexible study options</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern learning environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Basic academic qualifications</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport and documents</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default page