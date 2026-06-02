import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const page = () => {
  return (
    <>
        <Breadcrumb />
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Student Accommodation in Lithuania</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Finding comfortable accommodation is an important part of preparing for student life in
            Lithuania. International students can choose from different housing options based on their
            budget, lifestyle, and university location. Most students prefer university dormitories or shared
            apartments because they are affordable and convenient for daily travel.<br />
            Accommodation costs in Lithuania are generally lower than in many other European countries.
            Monthly housing expenses may vary depending on the city, room type, and facilities available.
            On average, students may spend around €120–300 per month for university dormitories, while
            private apartments or shared flats can cost between €250–650 per month.</p>
            </div>
            <div className=''>
               <Image width={420} height={320} className="rounded-md" src="/images/living/accommodation/accommodation.avif" alt="accommodation options for indian students in lithuania" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Popular Accommodation Options for Students</h4>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>University Student Housing</h5>
                <p className='mt-2 text-inter text-md text-justify'>Many Lithuanian universities provide on-campus or nearby student dormitories for international
                    students. These dormitories are considered one of the most budget-friendly accommodation
                    options for students starting their study abroad journey.</p>
                <p className='mt-3 text-inter text-md font-medium'>Dormitory facilities commonly include:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Furnished single or shared rooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Study desks and storage space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Shared kitchen and bathroom facilities</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet and utility services</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Laundry and common areas</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Living in university accommodation also allows students to interact with classmates and
                    experience multicultural student life more easily.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Shared Apartments</h5>
                <p className='mt-2 text-inter text-md text-justify'>Shared flats are another popular option among international students in Lithuania. Students
                    often share apartments with friends or fellow international students to reduce living expenses
                    and enjoy more independence.</p>
                <p className='mt-3 text-inter text-md font-medium text-justify'>Shared accommodation usually includes:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Private or shared bedrooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Kitchen and living space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet connection</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Utility services</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Before finalising accommodation, students should always check rental terms, transportation
                access, and nearby facilities.</p>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Comfortable Student Life in Lithuania</h4>
              <p className='font-inter text-md mt-3 text-justify'>Universities in Lithuania also support international students with accommodation guidance
                before the academic session begins. This helps students settle comfortably into their new
                environment and begin their education journey without unnecessary stress.</p>
            </div>
        </div>
    </>
  )
}

export default page