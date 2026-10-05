import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


export const metadata = {
  title: "Lithuania University Admission Process for Indian Students",
  description: "Apply for Lithuania universities Admission with confidence. We cover intakes and admission steps for Indian students. Contact our experts to start your journey.",
  keywords: [
      "Lithuania University Admission",
      "Lithuania Admission Process",
      "Study in Lithuania Admission",
      "Lithuania University Admission for Indian Students",
      "Lithuania University Application",
      "Admission in Lithuania Universities",
      "Lithuania Intake 2027"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/admission"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://www.studyinlithuania.in/study/admission/",
  siteName: "Study in Lithuania",
  title:
    "Lithuania University Admission Process for Indian Students",
  description:
    "Apply for Lithuania universities Admission with confidence. We cover intakes and admission steps for Indian students. Contact our experts to start your journey.",
  images: [
    {
      url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
      alt: "Study in Lithuania Admission",
    },
  ],
},
}

const page = () => {

 const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      name: "Study in Lithuania",
      url: "https://www.studyinlithuania.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinlithuania.in/images/logoa/logo.png",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinlithuania.in/study/admission/#webpage",
      url: "https://www.studyinlithuania.in/study/admission/",
      name: "Study in Lithuania Admission",
      description:
        "Learn about admission requirements, documents, application process, eligibility criteria and university admission procedures in Lithuania.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/study/admission/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/study/admission/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.studyinlithuania.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Study",
          item: "https://www.studyinlithuania.in/study/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Admission",
          item: "https://www.studyinlithuania.in/study/admission/",
        },
      ],
    },
  ],
};

  return (
    <>
         <Breadcrumb heading={'Admission​‍​‌‍​‍‌ Process for Indian Students in ​‍​‌‍​‍‌Lithuania'}/>
         <div className='py-5 px-5'>
           <h2 className='font-aino text-2xl md:text-4xl'>Lithuania Admission Process for Indian Students</h2>
               <p className='text-justify font-roboto text-md mt-3'>Many international students now choose Lithuania for higher education because it offers
                affordable European education, globally recognised degrees, and modern learning opportunities
                in a safe environment.
                <br />
                Discover universities that provide <Link className="font-semibold hover:underline" href="/study/scholarships">scholarships</Link> to assist international students in lowering tuition costs and making education in Lithuania more accessible.
                </p>
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
        <div className="flex justify-end items-end">
            <Link href={'/study/scholarships'} className="text-blue-500 font-roboto hover:underline">Read about scholarships <FaArrowRightLong className="inline-block"/></Link>
        </div>
         </div>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </>
  )
}

export default page