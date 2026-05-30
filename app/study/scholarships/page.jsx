import Breadcrumb from "@/app/components/Breadcrumb"

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
                        <li className="text-md font-inter">Government Scholarships</li>
                        <li className="text-md font-inter">University Merit Scholarships</li>
                        <li className="text-md font-inter">Partial Tuition Fee Waivers</li>
                        <li className="text-md font-inter">Erasmus+ Scholarships</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto text-[#3d3d3d]">Scholarship Eligibility</h4>
                     <p className="text-md font-inter mt-2">Students generally require:</p>
                     <ul className="mt-3 space-y-2">
                        <li className="text-md font-inter">Good academic scores</li>
                        <li className="text-md font-inter">Admission offer from a Lithuanian university</li>
                        <li className="text-md font-inter">IELTS or English proficiency proof</li>
                        <li className="text-md font-inter">SOP and updated CV</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Documents Required for Lithuania Admission</h4>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter">Academic transcripts</li>
                        <li className="text-md font-inter">Passport copy</li>
                        <li className="text-md font-inter">Admission letter</li>
                        <li className="text-md font-inter">SOP</li>
                        <li className="text-md font-inter">CV/Resume</li>
                        <li className="text-md font-inter">English proficiency proof</li>
                     </ul>
                     </div>
                    <div className="mt-5">
                     <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">How to Apply</h4>
                     <ul className="mt-3 space-y-2 flex justify-center flex-col gap-3 me-5">
                        <li className="px-5 py-3 rounded-lg bg-primary/10">
                          <h5 className="text-md font-semibold font-roboto">Choose Your University</h5>
                          <p className="text-sm font-inter">Select a course and university based on your career goals.</p>
                        </li>
                        <li className="px-5 py-3 rounded-lg bg-primary/10">
                          <h5 className="text-md font-semibold font-roboto">Check Scholarship Availability</h5>
                          <p className="text-sm font-inter">Explore scholarships offered by universities and government programs.</p>
                        </li>
                        <li className="px-5 py-3 rounded-lg bg-primary/10">
                          <h5 className="text-md font-semibold font-roboto">Submit Required Documents</h5>
                          <p className="text-sm font-inter">
                            Apply before deadlines with complete documents.<br />
                            Applying early can improve your chances of getting scholarships in Lithuania and reduce your
                            overall study expenses.
                          </p>
                        </li>
                     </ul>
                    </div>
                </div>
         </div>
      </>
  )
}

export default page