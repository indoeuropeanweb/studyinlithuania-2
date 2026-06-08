import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
         <Breadcrumb heading={''}/>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Study in Lithuania — Explore a smarter way to grow in Europe.</h2>
               <p className='text-justify font-roboto text-lg mt-3'>If you are planning to study in Europe and looking for an affordable, globally recognized,
                and safe destination, Lithuania is an excellent choice for Indian students. Known for its
                high-quality education and budget-friendly living, Lithuania is becoming one of the most
                preferred study destinations in Europe.<br />
                Whether you want to pursue a bachelor’s or master’s degree, choosing to study in
                Lithuania opens doors to international career opportunities and global exposure. <br />
                At Indo-European, we guide you through every step of your study abroad journey,
                making the entire process simple, transparent, and stress-free.</p>
              <div className='mt-10'>
                <h2 className='font-roboto text-xl md:text-2xl'>Advantages of Studying in Lithuania for Indian Students</h2>
                <h4 className='text-lg font-inter mt-3'>Studying in Lithuania offers several benefits beyond academics:</h4>
                <div className='grid grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Contemporary learning and high-standard education:</b> You must know that
                            Lithuanian universities follow European quality education standards.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Access to several courses:</b> Lithuania provides different types of study
                            alternatives from management to information technology, engineering, business
                            studies, and healthcare streams for those who want to study in Lithuanian
                            universities.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Part-time work options during study:</b> If any student is willing to earn some
                            money during their studies, they are allowed to work part-time while studying so
                            they can have the knowledge of the international work process and support
                            themselves.</li>
                      </ul>
                   <Image className="h-auto w-auto rounded-md" src="/images/lithuania/study-in-lithuania.webp" width={480} height={250} alt="study abroad lithuania" />
                 </div>
                 <div className=''>
                  <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Job opportunities after studies:</b> when you complete your degree, you can seek
                            or explore job opportunities in Lithuania or other European countries without any
                            confusion. Studying in Lithuania is really a perfect plan that gives you long-term
                            career options.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Global exposure:</b> Studying in Lithuania gives you permission to make
                            connections with other students from other countries and allows you to interact
                            with them from a global perspective.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Job opportunities after studies:</b> when you complete your degree, you can seek
                            or explore job opportunities in Lithuania or other European countries without any
                            confusion. Studying in Lithuania is really a perfect plan that gives you long-term
                            career options.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Global exposure:</b> Studying in Lithuania gives you permission to make
                            connections with other students from other countries and allows you to interact
                            with them from a global perspective.</li>
                  </ul>
                 </div>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5'>Reason to choose Indo-European</h2>
                      <p className='font-inter text-base'>If it comes to choosing the appropriate guidance, Indo-European is the right place and
                        has made a perfect reputation as the best Lithuanian study consultant in Delhi. We
                        know and understand that initiating one step ahead towards studying abroad is not an
                        easy decision; that&#39;s why we are here to help you by making it easier.</p>
                      <h4 className='text-lg md:text-xl font-roboto mt-5'>What makes us different?</h4>
                      <ul className='space-y-3 mt-3'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Individual counselling:</b> Our experts understand your goals, allowing us to provide you with the best options.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Expert Team:</b> Indo-European has an experienced team and expertise in guiding learners for Europe.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>University partnerships:</b> We have direct tie-ups with the best Lithuanian universities.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>End-to-end support:</b> You will have complete support from our side from the application process to the visa; we manage everything for you.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Strong visa success chance:</b> we record successful visa approvals.</li>
                      </ul>
                      <p className='mt-5 text-justify'>Lithuanian study consultants in Delhi don’t just guide you, but they also become a part
                        of your journey to easily study abroad.</p>
               </div>
         </div>
      </>
  )
}

export default page