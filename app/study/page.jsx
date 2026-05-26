import Breadcrumb from '../components/form/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
      <div className='py-4 px-10 bg-[#eaeff2] w-full min-h-40'>
         <Breadcrumb />
      </div>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Most likely you have asked yourself: why come study in Estonia?</h2>
               <div className='grid grid-cols-2 justify-center items-center mt-4'>
                 <div className='mt-2'>
                      <h4 className='text-lg font-roboto'>We will tell you why:</h4>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Estonia is an e-society, with electronic ID-cards, e-government, e-health, e-school, e-parking etc. (www.e-estonia.com). You would be living in a very unique country!</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;It takes only about 20 minutes to found your own company online and 99% of banking is done online.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Europe's start-up hot-spot! As a result, Estonia has more unicorns and successful start-up companies per capita than in any other country in Europe, e.g.  Wise, Bolt, Fortumo, Veriff, ID.me, Playtech, Pipedrive, Gelato, Erply, Glia etc.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Ranked 1st worldwide in air quality (World Health Organization 2013).</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;2nd place for internet freedom in the world (Freedom House 2022).</li>
                      </ul>
                 </div>
                 <div className='ms-5'>
                   <Image className="h-auto w-auto rounded-md" src="/images/study/lithuania-01.avif" width={400} height={250} alt="study abroad lithuania" />
                 </div>
               </div>
               <div className='mt-5'>
                      <h2 className='font-aino text-2xl md:text-4xl my-5'>... and why Estonian universities?</h2>
                      <ul className='space-y-3'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Over 150 unique and high quality degree programmes taught fully in English</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally accepted diplomas</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Various state scholarships and funding possibilities for incoming students</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English language widely spoken</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;High level research projects</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Active and fun student life</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Working possibilities during studies and possibility to stay in the country for 9 months to look for a job after graduation</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;The personal touch: small group sizes in classrooms</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Great value for money and affordable living</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe and stable environment</li>
                      </ul>
               </div>
               <div className=''>
               </div>
         </div>
      </>
  )
}

export default page