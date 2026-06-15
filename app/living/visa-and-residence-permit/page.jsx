import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";


export const metadata = {
  title: "Lithuania Student Visa & Residence Permit  | Visa Requirements, TRP & Application Process",
  description: "Learn about Lithuania student visa and temporary residence permit (TRP) requirements, application process, documents, fees, processing times, and work rights for international students.",
  keywords: ["Lithuania Student Visa", "Lithuania Residence Permit", "Lithuania TRP", "Lithuania Study Visa", "Temporary Residence Permit Lithuania", "Lithuania Visa Requirements", "Lithuania Student Visa Process", "Lithuania Immigration", "Lithuania Student Residence Permit", "Study in Lithuania Visa", "Lithuania Visa Documents", "Lithuania Student Permit", "Lithuania Visa Application", "Lithuania International Students", "Lithuania Study Abroad", "Lithuania Visa Guide", "Lithuania Residence Permit Process", "Lithuania Student Immigration", "Lithuania Visa Fees", "Lithuania TRP Application"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/visa-and-residence-permit"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    url: "https://www.studyinlithuania.in/living/visa-and-residence-permit/",
    siteName: "Study in Lithuania",
    title:
      "Lithuania Student Visa & Residence Permit 2026 | TRP & Application Process",
    description:
      "Learn about Lithuania student visas, temporary residence permits, required documents, application procedures and work rights.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/visa-and-residence-permit/visa-and-residence-permit.webp",
        width: 1200,
        height: 630,
        alt: "Lithuania Student Visa and Residence Permit",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Lithuania Student Visa & Residence Permit 2026 | TRP & Application Process",
    description:
      "Learn about Lithuania student visas, temporary residence permits, required documents, application procedures and work rights.",
    images: [
      "https://www.studyinlithuania.in/images/living/visa-and-residence-permit/visa-and-residence-permit.webp",
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
        url: "https://www.studyinlithuania.in/images/logos/logo.webp",
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
        "https://www.studyinlithuania.in/living/visa-and-residence-permit/#webpage",
      url:
        "https://www.studyinlithuania.in/living/visa-and-residence-permit/",
      name: "Lithuania Student Visa and Residence Permit",
      description:
        "Complete guide to Lithuania student visas, temporary residence permits, required documents, application process and work rights for international students.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/living/visa-and-residence-permit/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/living/visa-and-residence-permit/#article",
      headline:
        "Lithuania Student Visa and Residence Permit Guide",
      description:
        "Everything international students need to know about Lithuania student visas, temporary residence permits, application procedures and immigration requirements.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/living/visa-and-residence-permit/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinlithuania.in/images/living/visa-and-residence-permit/visa-and-residence-permit.webp",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/living/visa-and-residence-permit/#breadcrumb",
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
          name: "Living",
          item: "https://www.studyinlithuania.in/living/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Visa and Residence Permit",
          item:
            "https://www.studyinlithuania.in/living/visa-and-residence-permit/",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Apply for a Lithuania Student Visa and Residence Permit",
      step: [
        {
          "@type": "HowToStep",
          name: "Receive Admission Letter from a Lithuanian University",
        },
        {
          "@type": "HowToStep",
          name: "Prepare Required Documents",
        },
        {
          "@type": "HowToStep",
          name: "Apply for National Visa (D) or TRP",
        },
        {
          "@type": "HowToStep",
          name: "Submit Biometrics and Supporting Documents",
        },
        {
          "@type": "HowToStep",
          name: "Receive Visa Approval",
        },
        {
          "@type": "HowToStep",
          name: "Travel to Lithuania and Register Residence",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do international students need a visa to study in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students from non-EU and non-EEA countries generally need a National Visa (D) or a Temporary Residence Permit to study in Lithuania.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Temporary Residence Permit (TRP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Temporary Residence Permit allows international students to legally reside in Lithuania for the duration of their studies and can be renewed when required.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for a Lithuania student visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students typically need an admission letter, valid passport, proof of financial means, health insurance, accommodation proof, photographs and other supporting documents.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students work while studying in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. International students holding the appropriate residence permit can legally work while studying in Lithuania according to current immigration regulations.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/living/visa-and-residence-permit/#image",
      contentUrl:
        "https://www.studyinlithuania.in/images/living/visa-and-residence-permit/visa-and-residence-permit.webp",
      caption:
        "Lithuania Student Visa and Temporary Residence Permit Guide",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
        <Breadcrumb heading={"Visa and Residence Permit"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
            <div className=''>
             <h2 className='text-2xl md:text-4xl font-aino'>Visa & Residence Permit for Lithuania </h2>
             <p className='text-md font-roboto mt-3 text-justify'>Students planning to study in Lithuania must understand the visa and residence permit process before traveling. Indian students who are not citizens of EU/EEA countries or Switzerland generally need a national visa (Type D) and, in some cases, a temporary residence permit depending on the duration of their studies.</p>
             <p className='text-md font-roboto mt-2 text-justify'>The application process usually begins after receiving an official admission letter from a Lithuanian university. Once the university confirms admission, students can start preparing their visa documents and book an appointment at the nearest Lithuanian embassy or consulate.</p>
             </div>
             <div>
              <Image className='rounded-md' height={320} width={420} src="/images/living/visa-and-residence-permit/visa-and-residence-permit.webp" alt="visa and residence permit for indian students" />
             </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Who Needs a Visa for Lithuania?</h4>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Non-EU/EEA Students</h5>
                <p className='mt-3 text-inter text-md text-justfiy'>Students from non-EU countries (including India) typically need:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;National Long-Term Visa (Type D)</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Temporary Residence Permit (for longer degree programs)</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>This allows students to legally stay in Lithuania for their full study duration.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Shared Apartments</h5>
                <p className='mt-2 text-inter text-md text-justify'>Shared flats are another popular option among indian students in Lithuania. Students
                    often share apartments with friends or fellow indian students to reduce living expenses
                    and enjoy more independence.</p>
                <p className='mt-3 text-inter text-md text-justify'>Shared accommodation usually includes:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Private or shared bedrooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Kitchen and living space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet connection</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Utility services</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Before finalising accommodation, students should always check rental terms, transportation
                access, and nearby facilities.</p>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Lithuania Student Visa Process (Non-EU Students)</h4>
              <div className='mt-5'>
                <p className='mt-2 text-inter text-md text-justify'>The process generally includes the following steps:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Receive admission letter from university</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Book appointment at Lithuanian embassy/consulate</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Submit Type D visa application</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Provide required documents (passport, financial proof, insurance, etc.)</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Attend visa interview if required</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Wait for visa decision (usually a few weeks)</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Visa processing time may vary depending on the embassy workload and document verification.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Temporary Residence Permit in Lithuania</h5>
                <p className='mt-2 text-inter text-md text-justify'>Students planning to stay in Lithuania for longer degree programs may need a temporary residence permit after arrival.</p>
                <p className='mt-3 text-inter text-md text-justify'>To apply, students must:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Book an appointment with the Migration Department in Lithuania</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Submit application and required documents</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Provide proof of sufficient funds</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Show valid health insurance</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Submit university enrollment confirmation</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>The decision on the residence permit is usually made within a few weeks after submission, depending on application completeness.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>After Arrival in Lithuania</h5>
                <p className='mt-2 text-inter text-md text-justify'>Once students arrive in Lithuania, they can begin their studies after completing basic registration procedures. If the study program is longer than one year, applying for a residence permit becomes necessary for continued stay.</p>
                <p className='text-inter text-md my-5 text-justify'>Students must also register their place of residence within the required timeframe after receiving approval.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Family and Dependents</h5>
                <p className='mt-2 text-inter text-md text-justify'>In some cases, students may bring family members under specific conditions. Rules depend on the duration of stay and legal requirements. Each application is evaluated individually based on eligibility criteria.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Support for Indian Students</h5>
                <p className='mt-2 text-inter text-md text-justify'>Lithuanian authorities also provide support services to help indian students adjust smoothly. These services guide students regarding:</p>
                <p className='mt-3 text-inter text-md text-justify'>To apply, students must:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Visa and residence permit rules</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Legal stay requirements</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Document preparation</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Living and registration procedures</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Support is usually available through official migration and immigration departments, ensuring students receive proper guidance during their stay in Lithuania.</p>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Final Note</h4>
              <p className='font-inter text-md mt-3 text-justify'>Understanding the visa and residence permit process is an important step before starting your education in Lithuania. Proper documentation, timely application, and following official guidelines help ensure a smooth transition to student life in Europe.</p>
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