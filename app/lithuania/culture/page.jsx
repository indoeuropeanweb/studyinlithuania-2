import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={''} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Unique Culture</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
          Lithuania has a rich cultural heritage influenced by European traditions, history, art, and folklore. The country is known for its traditional music, folk dances, colorful festivals, and strong connection to nature. Lithuanian people highly value family, education, and cultural traditions, which can be seen in their celebrations and daily lifestyle. Along with preserving its old traditions, Lithuania also has a modern and welcoming culture that makes international students feel comfortable and accepted.
        </p>
        <Image className="rounded-md" width={320} height={240} src="/images/lithuania/culture/culture.avif" alt="Culture of Lithuania"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Interesting Facts About Lithuanian Culture</h2>
            <ul className='mt-5 space-y-2'>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania has one of the oldest languages in Europe, the Lithuanian language.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Folk music and traditional dances are an essential part of Lithuanian culture.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	The country has many cultural festivals, which are celebrated throughout the year.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania considers basketball to be the most popular sport.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Traditional Lithuanian cuisine consists of dishes with potatoes, bread, dairy products, and meat.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania puts a high value on education, the arts, and literature.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuanian culture is famous for different traditional handicrafts and wooden art.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania’s Christmas Eve customs are distinctive and commonly observed with family.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;  The country has a close relationship with nature, woods, and country traditions.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania is a mix of a modern European way of life and historical traditions. </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default page