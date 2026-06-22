import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


export const metadata = {
  title: "Study in Lithuania Admission  | Admission Requirements, Documents & Application Process",
  description: "Apply to study in Lithuania with ease. Learn about admission requirements, required documents, application process, English requirements, and university deadlines for Bachelor's, Master's, and PhD programs.",
  keywords: ["Study in Lithuania Admission", "Lithuania Admission Process", "Lithuania University Admission", "Admission Requirements Lithuania", "Apply to Study in Lithuania", "Lithuania Student Visa", "Lithuania Universities Admission", "Documents Required for Lithuania Admission", "Bachelor's Admission Lithuania", "Master's Admission Lithuania", "PhD Admission Lithuania", "Lithuania Application Process", "Study Abroad Lithuania", "International Students Lithuania", "Lithuania Education", "Lithuania Universities", "Lithuania Admission Requirements", "Lithuania Scholarships", "Lithuania Intake 2026", "Lithuania Student Application"],
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
    "Study in Lithuania Admission 2026 | Admission Requirements & Application Process",
  description:
    "Learn about Lithuania admission requirements, application process, eligibility criteria, required documents and student visa procedures.",
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
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      url: "https://www.studyinlithuania.in",
      name: "Study in Lithuania",
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.studyinlithuania.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
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
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/study/admission/#article",
      headline: "Admission Process for Studying in Lithuania",
      description:
        "Complete guide to admission requirements, documents, application process, visa procedures and eligibility criteria for international students in Lithuania.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/study/admission/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
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
    {
      "@type": "HowTo",
      name: "How to Apply for Admission in Lithuania",
      description:
        "Step-by-step admission process for international students applying to Lithuanian universities.",
      step: [
        {
          "@type": "HowToStep",
          name: "Choose a University and Program",
        },
        {
          "@type": "HowToStep",
          name: "Check Eligibility Requirements",
        },
        {
          "@type": "HowToStep",
          name: "Prepare Academic Documents",
        },
        {
          "@type": "HowToStep",
          name: "Submit Online Application",
        },
        {
          "@type": "HowToStep",
          name: "Attend Interview or English Test (if required)",
        },
        {
          "@type": "HowToStep",
          name: "Receive Admission Offer Letter",
        },
        {
          "@type": "HowToStep",
          name: "Pay Tuition Fees",
        },
        {
          "@type": "HowToStep",
          name: "Apply for Visa and Residence Permit",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What documents are required for admission in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students generally need academic transcripts, degree certificates, passport copy, English proficiency proof or MOI, SOP, recommendation letters and passport-size photographs.",
          },
        },
        {
          "@type": "Question",
          name: "Can I study in Lithuania without IELTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Lithuanian universities accept a Medium of Instruction (MOI) certificate or conduct their own English assessment instead of IELTS.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the admission process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The admission process typically takes between 2 and 8 weeks depending on the university, program and document verification process.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students apply directly to Lithuanian universities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, international students can apply directly through the university admission portal or with the assistance of authorized admission partners.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/study/admission/#image",
      contentUrl:
        "https://www.studyinlithuania.in/wp-content/uploads/study-in-lithuania-admission.jpg",
      caption:
        "Admission Process for International Students in Lithuania",
      representativeOfPage: true,
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