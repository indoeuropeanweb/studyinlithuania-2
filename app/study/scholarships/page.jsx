import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <>
         <Breadcrumb heading={''}/>
         <div className='py-5 px-5'>
           <h2 className='font-aino text-2xl md:text-4xl'>Scholarships in Lithuania for Indian Students</h2>
               <p className='text-justify font-roboto text-md mt-3'>Looking for affordable study options in Europe? Lithuania offers scholarships for Indian students
                through university grants, tuition fee waivers, and government-funded programs. These
                scholarships help students reduce tuition costs while studying at globally recognised
                universities.</p>
                  <div className="mt-10"> 
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto">Types of Scholarships in Lithuania</h4>
                     <ul className="mt-3 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Government Scholarships</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University Merit Scholarships</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Partial Tuition Fee Waivers</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Erasmus+ Scholarships</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto text-[#3d3d3d]">Scholarship Eligibility</h4>
                     <p className="text-md font-inter mt-2">Students generally require:</p>
                     <ul className="mt-3 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Good academic scores</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Admission offer from a Lithuanian university</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;IELTS or English proficiency proof</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;SOP and updated CV</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Documents Required for Lithuania Admission</h4>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic transcripts</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Passport copy</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Admission letter</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;SOP</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;CV/Resume</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency proof</li>
                     </ul>
                     </div>
                    <div className="mt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-12 bg-[#FFB81C] rounded-full"></div>
                      <h4 className="text-2xl md:text-3xl font-bold font-roboto text-[#15803D]">
                        How to Apply
                      </h4>
                    </div>

                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-5 top-0 h-full w-1 bg-[#048D4E]/20 rounded-full"></div>

                      <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#048D4E] text-white font-bold shadow-lg">
                            1
                          </div>

                          <div className="flex-1 bg-white border border-[#048D4E]/15 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#15803D]">
                              Choose Your University
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Select a course and university that aligns with your academic
                              interests and long-term career goals.
                            </p>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB81C] text-[#3d3d3d] font-bold shadow-lg">
                            2
                          </div>

                          <div className="flex-1 bg-white border border-[#FFB81C]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#3d3d3d]">
                              Check Scholarship Availability
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Explore scholarships offered by universities, government programs,
                              and external funding organizations.
                            </p>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#BE3A34] text-white font-bold shadow-lg">
                            3
                          </div>

                          <div className="flex-1 bg-white border border-[#BE3A34]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#BE3A34]">
                              Submit Required Documents
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Apply before the deadline with all required documents. Early
                              applications often increase scholarship opportunities and help
                              reduce overall study costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
         </div>
      </>
  )
}

export default page