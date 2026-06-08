import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={''} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Lithuania</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <p className='text-md font-roboto mt-3 text-justify'>
            Lithuania is one of the fastest-growing international student study destinations in
            Europe. The country is located in the Baltic region of Europe and is famous for its high-
            quality education system, affordable tuition fees, safe environment, and globally
            recognized universities. Lithuania is a perfect blend of modern European lifestyle
            alongside a rich cultural heritage. It is a perfect destination for students looking for
            quality education at an affordable cost. <br /><br />
            The country is a member of the European Union and the Schengen Area, so students
            can travel to many European countries while they are studying. More English-taught
            programs, advanced research opportunities, and welcoming communities have made
            Lithuania more and more popular among Indian and international students.
        </p>
        <Image className="rounded-md" width={400} height={240} src="/images/lithuania/state/lithuania-state.webp" alt="lithuania state of study"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Quick Facts About Lithuania</h2>
            <ul className='mt-5 space-y-2'>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Capital City:</b> Vilnius</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Official Language:</b> Lithuanian</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Currency:</b> Euro (€)</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Population:</b> Around 2.8 million</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Region:</b> Northern Europe (Baltic Region)</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Climate:</b> Cold winters and mild summers</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Time Zone:</b> Eastern European Time (EET)</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>International Student Friendly:</b> Yes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Average Tuition Fees:</b> Affordable compared to many European countries</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Popular Study Fields:</b> Business, IT, Engineering, Medicine, and Management</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>EU &amp; Schengen Member:</b> Yes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Medium of Instruction:</b> English programs are widely available.</li>
            </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Students Choose Lithuania?</h2>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Affordable Education and Living Costs</h4>
              <p className='mt-2 text-roboto'>Lithuania is considered one of the most budget-friendly European countries for
                international students. Tuition fees and living expenses are lower compared to many
                Western European nations.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Globally Recognized Universities</h4>
              <p className='mt-2 text-roboto'>The country has several reputed universities that offer internationally accepted degrees
                and modern education facilities.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Safe and Peaceful Environment</h4>
              <p className='mt-2 text-roboto'>Lithuania is known for its student-friendly and safe environment, which helps
                international students feel comfortable while studying abroad.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Career Opportunities</h4>
              <p className='mt-2 text-roboto'>Students can gain international exposure and explore career opportunities within
                Lithuania and across Europe after completing their education.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>English-Taught Programs</h4>
              <p className='mt-2 text-roboto'>Many universities in Lithuania offer bachelor’s and master’s programs in English,
                making it easier for international students to study without language barriers.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default page