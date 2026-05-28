import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={'Master Studies in Lithuania'}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Master’s Courses in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Master’s degree programs in Lithuania are advanced study programs that usually last 1–2
years and focus on specialised knowledge and career development.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medicine &amp; Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance &amp; Economics</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Arts &amp; Design</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose Master’s in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees in Europe</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;EU-recognised degrees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong focus on research and practical learning</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Good job and career opportunities in Europe</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe and student-friendly environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Bachelor’s degree in relevant field</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency (IELTS or equivalent if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport and academic documents</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default page