import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const page = () => {
  return (
    <>
        <Breadcrumb />
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
            <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Living</h2>
          <p className='text-md font-roboto mt-3'>Lithuania provides an affordable, comfortable, and modern lifestyle for international students in
            the heart of Europe. Lithuania is known for its safe environment, advanced digital facilities, and
            balanced student life. From online services and public transport systems to free Wi-Fi in many
            public places, daily life in Lithuania is simple and convenient for international students. The
            country is also recognised for its clean cities, peaceful surroundings, and welcoming
            atmosphere, making it easier for students to adjust to a new environment.<br />
            The affordability of education in Lithuania compared to many other European countries is one of
            the main reasons why international students prefer studying here. Along with affordable tuition
            fees, students can comfortably manage their monthly living expenses through student discounts
            and part-time work opportunities. International students are allowed to work while studying,
            helping them gain practical experience and support their daily expenses during their education
            journey.</p>
            </div>
            <div className=''>
              <Image className='rounded-md' width={420} height={320} src="/images/living/living.webp" alt="living in lithuania for indian students" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Student Life in Lithuania</h4>
              <p className='text-md font-inter mt-3'>Student life in Lithuania is vibrant and multicultural. Universities regularly organise:</p>
              <ul className='mt-3'>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Cultural events</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Workshops and seminars</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Orientation programs</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Student clubs and activities</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Social gatherings and networking events</li>
              </ul>
              <p className='text-inter text-md mt-2'>These activities help international students settle into university life smoothly. Students can
                explore Lithuanian culture, connect with people from different countries, and build strong
                friendships during their studies abroad. Such experiences also help students improve
                communication skills, gain confidence, and create memorable experiences throughout their
                academic journey.</p>
                <p className='text-inter text-md mt-2'>At the beginning of each academic year, universities also introduce new international students
                to campus facilities, academic systems, faculty members, and city life. This support helps
                students feel more comfortable and confident while starting their education in Lithuania.</p>
            </div>
        </div>
    </>
  )
}

export default page