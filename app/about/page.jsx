import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image";
import {
  FaUniversity,
  FaUserGraduate,
  FaCheckCircle,
  FaAward,
  FaLanguage,
  FaGlobeEurope,
} from "react-icons/fa";

const page = () => {
  return (
    <>
     <Breadcrumb heading={'About Us'}/>
     <div className='mx-auto max-w-6xl'>
         <div className='py-10 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Who We Are?</h2>
               <p className='text-justify font-roboto text-lg mt-3'>We are a dedicated international education guidance platform committed to helping students
                achieve their dream of studying abroad. For over 20+ years, we have been supporting students
                with university admissions, scholarships, visa applications, IELTS preparation, and complete
                study abroad guidance.<br />
                With more than 5,000+ successful student placements, we have helped aspiring students pursue
                Bachelor&#39;s, Master&#39;s, and other higher education programmes in leading international
                destinations. Our experienced team works closely with students to simplify every step of the
                admission and visa process.</p>
              <div className='mt-10'>
                <h2 className='font-roboto text-xl md:text-2xl'>What We Offer</h2>
                <div className='grid grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University admission guidance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Scholarship assistance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Student visa support</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;IELTS coaching and preparation</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Interview preparation</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Pre-departure guidance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Ongoing student support</li>
                      </ul>
                   <Image className="h-auto w-auto rounded-md" src="/images/lithuania/study-in-lithuania.webp" width={480} height={250} alt="study abroad lithuania" />
                 </div>
                 <div className=''>
                    <p className='text-justify font-roboto text-lg mt-3'>Our commitment to quality counselling and personalised assistance has helped us maintain a
                      99% visa success rate, making us a trusted choice for students planning to study overseas.</p>
                 </div>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5'>Study in Lithuania</h2>
                      <p className='font-inter text-base text-justify'>Lithuania has become one of Europe&#39;s most popular study destinations for indian
                        students. The country offers globally recognised degrees, affordable tuition fees, modern
                        learning facilities, and excellent career opportunities.</p>
                      <p className='font-inter text-justify text-base mt-3'>Students can explore study opportunities at some of Lithuania&#39;s leading higher education
institutions, including:</p>
                      <ul className='space-y-3 mt-3'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Vilnius University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Vilnius Gediminas Technical University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Kaunas University of Technology</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Vytautas Magnus University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Mykolas Romeris University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Klaipėda University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Lithuanian University of Health Sciences</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;ISM University of Management and Economics</li>
                      </ul>
                      <p className='mt-5 text-justify'>These institutions offer a wide range of English-taught programmes and provide a supportive
environment for indian students.</p>
               </div>
                <div className="my-10">
                  <div className="mb-10">
                    <h2 className="font-roboto text-xl md:text-2xl mt-3">
                      Lithuania in Numbers
                    </h2>
                    <p className="text-gray-600 mt-3 text-base">
                      Lithuania offers affordable education, globally recognized degrees,
                      and excellent opportunities for indian students.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUniversity className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">20+</h3>
                      <p className="mt-2 text-gray-600">
                        Years of Overseas Education Experience
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUserGraduate className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">5,000+</h3>
                      <p className="mt-2 text-gray-600">
                        Students Successfully Guided
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaCheckCircle className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">99%</h3>
                      <p className="mt-2 text-gray-600">
                        Visa Success Rate
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaAward className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">3000+</h3>
                      <p className="mt-2 text-gray-600">
                        Scholarship Opportunities
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaLanguage className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">English</h3>
                      <p className="mt-2 text-gray-600">
                        Bachelor's & Master's Programmes
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaGlobeEurope className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">Growing</h3>
                      <p className="mt-2 text-gray-600">
                        Indian Student Community
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 bg-primary text-white rounded-2xl p-8">
                    <p className="text-center text-lg leading-relaxed">
                      We believe studying abroad is more than earning a degree—it's an
                      opportunity to build a successful global career and gain
                      life-changing indian experience.
                    </p>
                  </div>
                </div>
         </div>
         </div>
    </>
  )
}

export default page