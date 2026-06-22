import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Scholarships in Lithuania  | Study Grants, Tuition Waivers & Funding for indian Students",
  description: "Explore scholarships in Lithuania for international students, including tuition fee waivers, government grants, university scholarships, and financial aid opportunities for Bachelor's, Master's, and PhD programs.",
  keywords: ["Scholarships in Lithuania", "Lithuania Scholarships", "Study in Lithuania Scholarships", "Lithuania Government Scholarships", "Lithuania University Scholarships", "International Student Scholarships Lithuania", "Bachelor's Scholarships Lithuania", "Master's Scholarships Lithuania", "PhD Scholarships Lithuania", "Tuition Fee Waiver Lithuania", "Financial Aid Lithuania", "VILNIUS TECH Scholarship", "Vilnius University Scholarship", "Study Abroad Scholarships", "European Scholarships", "Lithuania Education Funding", "Lithuania Study Grants", "Fully Funded Scholarships Lithuania", "Merit Scholarships Lithuania", "International Students Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/scholarships"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinlithuania.in/study/scholarships/",
    siteName: "Study in Lithuania",
    title:
      "Scholarships in Lithuania 2026 | Study Grants, Tuition Waivers & Funding",
    description:
      "Discover scholarships, grants, tuition fee waivers and financial aid opportunities for international students studying in Lithuania.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
        alt: "Scholarships in Lithuania",
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
            url: "https://www.studyinlithuania.in/",
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
            "https://www.studyinlithuania.in/study/scholarships/#webpage",
          url: "https://www.studyinlithuania.in/study/scholarships/",
          name: "Scholarships in Lithuania",
          description:
            "Explore scholarships, grants, tuition fee waivers and funding opportunities available for international students studying in Lithuania.",
          isPartOf: {
            "@id": "https://www.studyinlithuania.in/#website",
          },
          breadcrumb: {
            "@id":
              "https://www.studyinlithuania.in/study/scholarships/#breadcrumb",
          },
          inLanguage: "en",
        },
        {
          "@type": "Article",
          "@id":
            "https://www.studyinlithuania.in/study/scholarships/#article",
          headline:
            "Scholarships in Lithuania for International Students",
          description:
            "Complete guide to scholarships, grants, tuition waivers and financial aid opportunities available for Bachelor's, Master's and PhD students in Lithuania.",
          mainEntityOfPage: {
            "@id":
              "https://www.studyinlithuania.in/study/scholarships/#webpage",
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
            "https://www.studyinlithuania.in/study/scholarships/#breadcrumb",
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
              name: "Scholarships",
              item: "https://www.studyinlithuania.in/study/scholarships/",
            },
          ],
        },
        {
          "@type": "FinancialAid",
          name: "Scholarships in Lithuania",
          description:
            "Financial support opportunities including tuition fee waivers, government scholarships, university grants, merit-based scholarships and research funding for international students.",
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Can international students get scholarships in Lithuania?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Lithuanian universities and government organizations offer scholarships, tuition fee waivers and grants for international students based on academic merit and eligibility.",
              },
            },
            {
              "@type": "Question",
              name: "Are scholarships available for Bachelor's students in Lithuania?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Several Lithuanian universities offer tuition fee reductions, partial scholarships and full tuition waivers for eligible Bachelor's degree students.",
              },
            },
            {
              "@type": "Question",
              name: "Are there scholarships for Master's and PhD students?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Master's and PhD students can apply for university scholarships, research grants, government-funded scholarships and tuition support programs.",
              },
            },
            {
              "@type": "Question",
              name: "How much scholarship can I get in Lithuania?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Scholarships vary by university and program. Students may receive partial tuition discounts, full tuition waivers or monthly stipends depending on eligibility.",
              },
            },
          ],
        },
        {
          "@type": "ImageObject",
          "@id":
            "https://www.studyinlithuania.in/study/scholarships/#image",
          contentUrl:
            "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
          caption:
            "Scholarships and Financial Aid Opportunities in Lithuania",
          representativeOfPage: true,
        },
      ],
    };

  return (
    <>
         <Breadcrumb heading={"Discover​‍​‌‍​‍‌ Scholarship Programs That Can Help You Make Your Education in Lithuania More ​‍​‌‍​‍‌Affordable"}/>
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
                      <div className="absolute left-5 top-0 h-full w-1 bg-[#048D4E]/20 rounded-full"></div>

                      <div className="space-y-6">
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
                <div className="flex justify-end items-end mt-5">
                    <Link href={'/living'} className="text-blue-500 font-roboto hover:underline">Read about living in lithuania <FaArrowRightLong className="inline-block"/></Link>
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