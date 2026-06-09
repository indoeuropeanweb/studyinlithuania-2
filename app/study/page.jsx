import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
         <Breadcrumb heading={''}/>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Why Study in Lithuania?</h2>
               <p className='text-justify font-roboto text-lg mt-3'>Many international students now choose Lithuania for higher education because it offers
                affordable European education, globally recognised degrees, and modern learning opportunities
                in a safe environment.</p>
              <div className='mt-2'>
                <h4 className='text-lg font-inter'>Here’s why Lithuania is becoming a popular study destination in Europe:</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Member of the European Union and Schengen Area</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees and living costs compared to many European countries</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;More than 500+ English-taught programs available for international students</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Degrees recognised across Europe and many other countries</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern universities with advanced research and practical learning facilities</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Growing hub for technology, innovation, business, and healthcare studies</li>
                      </ul>
                   <Image className="h-auto w-auto rounded-md" src="/images/study/lithuania-01.webp" width={400} height={250} alt="study abroad lithuania" />
                 </div>
                 <div className=''>
                  <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe, peaceful, and student-friendly environment</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunity to travel across Schengen countries during studies</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International student community from different parts of the world</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Part-time work opportunities available for students</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Post-study career opportunities in Lithuania and Europe</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong focus on innovation, digital learning, and research-based education</li>
                  </ul>
                 </div>
               </div>
               <div className='mt-5'>
                      <h2 className='font-aino text-2xl md:text-4xl my-5'>Why Choose Lithuanian Universities?</h2>
                      <p className='font-inter text-base'>Lithuanian universities provide high-quality education with affordable study options for
international students.</p>
                      <ul className='space-y-3 mt-5'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally recognised universities and diplomas</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English widely spoken in universities and major cities</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Scholarships and financial support opportunities available</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern campuses and advanced laboratories</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Industry-oriented and practical learning approach</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Small classroom sizes for better student interaction</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research opportunities in technology, medicine, engineering, and business</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable accommodation and student-friendly lifestyle</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Multicultural and welcoming academic environment</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong career opportunities after graduation in Europe</li>
                      </ul>
               </div>
               <div className='my-5'>
                    <h2 className='font-aino text-2xl md:text-4xl my-3'>Study in Lithuania for a Global Future</h2>
                    <p className='text-lg font-inter'>Lithuania combines quality education, affordable costs, modern infrastructure, and international
                     exposure, making it one of the emerging destinations for students planning to study in Europe.</p>
               </div>
         </div>
      </>
  )
}

export default page