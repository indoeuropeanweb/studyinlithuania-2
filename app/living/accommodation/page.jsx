import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export const metadata = {
  title: "Student Accommodation in Lithuania  | Housing, Dormitories & Living Costs for Indian Students",
  description: "Find student accommodation in Lithuania, including university dormitories, private apartments, shared housing, and living costs. Discover affordable and comfortable housing options for international students studying in Lithuania",
  keywords: ["Student Accommodation Lithuania", "Accommodation in Lithuania", "Student Housing Lithuania", "Lithuania Dormitories", "University Accommodation Lithuania", "Private Accommodation Lithuania", "Living in Lithuania", "Student Apartments Lithuania", "Lithuania Student Residence", "Housing for International Students Lithuania", "Lithuania Living Costs", "Lithuania Dorm Rooms", "Shared Accommodation Lithuania", "Study in Lithuania Accommodation", "Affordable Housing Lithuania", "Lithuania Student Life", "Lithuania Universities Accommodation", "International Students Lithuania", "Lithuania Housing Guide", "Living Expenses Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/accommodation"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/living/accommodation/",
    siteName: "Study in Lithuania",
    title:
      "Student Accommodation in Lithuania 2026 | Housing, Dormitories & Living Costs",
    description:
      "Explore student accommodation options in Lithuania including dormitories, private apartments, shared housing and living costs.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/accommodation/accommodation.webp",
        width: 1200,
        height: 630,
        alt: "Student Accommodation in Lithuania",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Student Accommodation in Lithuania 2026 | Housing, Dormitories & Living Costs",
    description:
      "Explore student accommodation options in Lithuania including dormitories, private apartments, shared housing and living costs.",
    images: [
      "https://www.studyinlithuania.in/images/living/accommodation/accommodation.webp",
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
        "https://www.studyinlithuania.in/living/accommodation/#webpage",
      url:
        "https://www.studyinlithuania.in/living/accommodation/",
      name: "Student Accommodation in Lithuania",
      description:
        "Explore accommodation options in Lithuania including university dormitories, student residences, private apartments and shared housing.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/living/accommodation/#article",
      headline: "Student Accommodation in Lithuania",
      description:
        "Complete guide to student housing, university dormitories, private rentals, accommodation costs and living arrangements in Lithuania.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/living/accommodation/#webpage",
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
        url: "hhttps://www.studyinlithuania.in/images/living/accommodation/accommodation.webp",
      },
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Accommodation",
          item:
            "https://www.studyinlithuania.in/living/accommodation/",
        },
      ],
    },
    {
      "@type": "Residence",
      name: "Student Accommodation in Lithuania",
      description:
        "Accommodation options available for international students including university dormitories, student residences, shared apartments and private housing.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do Lithuanian universities provide accommodation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most Lithuanian universities offer dormitories and student residences with modern facilities and internet access.",
          },
        },
        {
          "@type": "Question",
          name: "What types of accommodation are available in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students can choose university dormitories, shared apartments, private rentals, student residences and short-term housing options.",
          },
        },
        {
          "@type": "Question",
          name: "Is accommodation affordable in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lithuania is considered one of the most affordable study destinations in Europe, with reasonable housing and living costs.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students rent private apartments in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. International students can rent private apartments or shared accommodation through local housing platforms and rental agencies.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/living/accommodation/#image",
      contentUrl:
        "https://www.studyinlithuania.in/images/living/accommodation/accommodation.webp",
      caption:
        "Student Accommodation and Housing Options in Lithuania",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
        <Breadcrumb heading={"Lithuania offers a variety of accommodation options for international students, including university dormitories, student residences, shared apartments, and private rentals. Most universities provide affordable on-campus housing equipped with modern facilities, internet access, study spaces, and common kitchens. Students can also choose private apartments or shared housing in major cities such as Vilnius, Kaunas, and Klaipėda. With reasonable rental prices and a relatively low cost of living compared to many Western European countries, Lithuania remains one of the most affordable study destinations in Europe."}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Student Accommodation in Lithuania</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Finding comfortable accommodation is an important part of preparing for student life in
            Lithuania. indian students can choose from different housing options based on their
            budget, lifestyle, and university location. Most students prefer university dormitories or shared
            apartments because they are affordable and convenient for daily travel.<br />
            Accommodation costs in Lithuania are generally lower than in many other European countries.
            Monthly housing expenses may vary depending on the city, room type, and facilities available.
            On average, students may spend around €120–300 per month for university dormitories, while
            private apartments or shared flats can cost between €250–650 per month.</p>
            </div>
            <div className=''>
               <Image width={420} height={320} className="rounded-md" src="/images/living/accommodation/accommodation.webp" alt="accommodation options for indian students in lithuania" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Popular Accommodation Options for Students</h4>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>University Student Housing</h5>
                <p className='mt-2 text-inter text-md text-justify'>Many Lithuanian universities provide on-campus or nearby student dormitories for indian
                    students. These dormitories are considered one of the most budget-friendly accommodation
                    options for students starting their study abroad journey.</p>
                <p className='mt-3 text-inter text-md font-medium'>Dormitory facilities commonly include:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Furnished single or shared rooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Study desks and storage space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Shared kitchen and bathroom facilities</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet and utility services</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Laundry and common areas</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Living in university accommodation also allows students to interact with classmates and
                    experience multicultural student life more easily.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Shared Apartments</h5>
                <p className='mt-2 text-inter text-md text-justify'>Shared flats are another popular option among indian students in Lithuania. Students
                    often share apartments with friends or fellow indian students to reduce living expenses
                    and enjoy more independence.</p>
                <p className='mt-3 text-inter text-md font-medium text-justify'>Shared accommodation usually includes:</p>
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
              <h4 className='font-roboto text-xl md:text-2xl'>Comfortable Student Life in Lithuania</h4>
              <p className='font-inter text-md mt-3 text-justify'>Universities in Lithuania also support indian students with accommodation guidance
                before the academic session begins. This helps students settle comfortably into their new
                environment and begin their education journey without unnecessary stress.</p>
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