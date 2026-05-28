import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={'PhD Studies in Lithuania'}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>PhD Programs in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>PhD programs in Lithuania offer advanced research opportunities, internationally recognised
            qualifications, and modern academic facilities for students aiming to build careers in research,
            teaching, and specialised industries.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering &amp; Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medical &amp; Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law &amp; Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Economics &amp; Finance</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Environmental Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Humanities &amp; Arts</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Study PhD in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research-focused education system</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees compared to many European countries</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;EInternationally recognised doctoral degrees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern laboratories and research facilities</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught PhD programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunity to collaborate in European research projects</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe and student-friendly environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Master’s degree in relevant field</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research proposal or academic background</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency requirements</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Required academic and identification documents</li>
            </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Study PhD in Lithuania</h2>
            <p className='mt-5'>Lithuania is becoming a growing destination for international researchers and doctoral students
            because of its affordable education, modern universities, and strong focus on innovation and
            research development.</p>
        </div>
      </div>
    </div>
  )
}

export default page