import Breadcrumb from "@/app/components/Breadcrumb"
import { IoIosArrowForward } from "react-icons/io"

const page = () => {
  return (
    <>
         <Breadcrumb heading={''}/>
         <div className='py-5 px-5'>
           <h2 className='font-aino text-2xl md:text-4xl'>Lithuania Admission Process for Indian Students</h2>
               <p className='text-justify font-roboto text-md mt-3'>Many international students now choose Lithuania for higher education because it offers
                affordable European education, globally recognised degrees, and modern learning opportunities
                in a safe environment.</p>
                <div className="mt-10">
                  <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Lithuania Admission Process – Step by Step</h4>
                  <ul className="space-y-4 mt-5">
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Choose the Right University and Course</h5>
                        <p className="text-md font-inter">Select a university and program that matches your academic background and career goals.
                          Lithuania offers popular courses in engineering, business, IT, healthcare, and management.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Check Eligibility Requirements</h5>
                        <p className="text-md font-inter">Before applying, review the university’s academic and English language requirements carefully.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Prepare Required Documents</h5>
                        <p className="text-md font-inter">Keep all your documents ready to avoid delays during the admission process.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Submit Your Application</h5>
                        <p className="text-md font-inter">Students can apply directly to universities or through experienced admission consultants.
                            Ensure all information is correct before submission.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Receive the Offer Letter</h5>
                        <p className="text-md font-inter">Once your application is accepted, the university will issue an official offer letter.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Pay the Tuition Fee</h5>
                        <p className="text-md font-inter">Students need to pay the initial tuition fee to confirm their admission.</p>
                    </li>
                    <li>
                        <h5 className="text-lg font-roboto font-semibold">Apply for Lithuania Student Visa</h5>
                        <p className="text-md font-inter">After completing admission formalities, students can begin their Lithuania student visa process
                            with the required documents.</p>
                    </li>
                  </ul>
                  <div className="mt-10"> 
                     <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Lithuania Intake 2026</h4>
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto">September Intake (Main intake)</h4>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Applications Start: January–February 2026</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Deadline: May–June 2026</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Classes Begin: September 2026</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto text-[#3d3d3d]">February Intake (Limited Courses)</h4>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Applications Start: October–November 2025</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Deadline: December 2025–January 2026</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Classes Begin: February 2026</li>
                     </ul>
                     </div>
                     <p className="text-md font-inter mt-5">Students are advised to apply early for Lithuania intake 2026 to improve admission and visa
                        processing chances.</p>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Documents Required for Lithuania Admission</h4>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid Passport</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic Certificates &amp; Transcripts</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Updated Resume/CV</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Statement of Purpose (SOP)</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Letter of Recommendation</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;IELTS or English Proficiency Test Score</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Passport-Size Photographs</li>
                     </ul>
                </div>
                <div className="mt-10">
                  <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Documents Required for Visa Process</h4>
                  <ul className="space-y-3 mt-5">
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Financial Proof</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Tuition Fee Payment Receipt</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Health Insurance</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University Offer Letter</li>
                  </ul>
                  <p className="text-md font-inter my-5">Preparing the correct documents on time can make the Lithuania admission process faster and
                    smoother for Indian students.</p>
                </div>
         </div>
      </>
  )
}

export default page