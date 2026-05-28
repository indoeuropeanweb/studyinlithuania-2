import Breadcrumb from '@/app/components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={''} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Nature and Weather</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
            Lithuania is famous for its delightful natural scenery, tranquil environment, and hygienic
            surroundings. The country is made up of woods, rivers, lakes, and a calm atmosphere.
            Lithuania has a moderate climate with four seasons. Summers are pleasant, while
            winters can be snowy and cold. Changing seasons provide international learners with a
            unique experience.
        </p>
        <Image className="rounded-md" width={320} height={140} src="/images/lithuania/nature-and-weather/nature-and-weather.avif" alt="nature and weather of lithuania"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Key highlights of Lithuania&#39;s Weather and Climate</h2>
            <ul className='mt-5 space-y-2'>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Forest Coverage:</b> About one-third of the country is covered with forests.</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Famous Natural Features:</b> Lakes, Rivers, Green Parks, Sand Dunes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Climate Type:</b> Moderate continental climate.</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Summer temperature:</b> Usually between 20°C and 25°C</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Winter Temperature:</b> Usually -5°C to 5°C</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Best Season to Visit:</b> Spring and summer months</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Air Quality:</b> Clean, environmentally friendly</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>International Student Friendly:</b> Yes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Popular Nature Areas: </b> National parks, the Baltic coast, and countryside areas</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Winter Snow:</b> Typical December through February</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Daylight:</b> Longer days in summer, shorter days in winter</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default page