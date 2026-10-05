import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Best Student Accommodation Lithuania: Budget Friendly Options",
  description: "Find student accommodation in Lithuania. Compare dorms, private flats, and costs. Get budget tips and find your perfect home. Start your search today.",
  keywords: [
      "Student Accommodation in Lithuania",
      "Accommodation in Lithuania",
      "Student Housing in Lithuania",
      "Lithuania Student Accommodation",
      "Student Apartments in Lithuania",
      "University Dormitories in Lithuania",
      "Private Accommodation in Lithuania",
      "Affordable Student Accommodation in Lithuania",
      "International Student Housing Lithuania",
      "Living in Lithuania"
  ],
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
      "Best Student Accommodation Lithuania: Budget Friendly Options",
    description:
      "Find student accommodation in Lithuania. Compare dorms, private flats, and costs. Get budget tips and find your perfect home. Start your search today.",
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
      "Best Student Accommodation Lithuania: Budget Friendly Options",
    description:
      "Find student accommodation in Lithuania. Compare dorms, private flats, and costs. Get budget tips and find your perfect home. Start your search today.",
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
  ],
};

  return (
    <>
        <Breadcrumb heading={"Living​‍​‌‍​‍‌ Arrangements for Indian Students in ​‍​‌‍​‍‌Lithuania"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Student Accommodation in Lithuania</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Finding comfortable accommodation is an important part of preparing for student life in
            Lithuania. indian students can choose from different housing options based on their
            budget, lifestyle, and university location. Most students prefer university dormitories or shared
            apartments because they are affordable and convenient for daily travel.<br />
            <Link className="font-semibold hover:underline" href="/living/living-costs">Living costs</Link> in Lithuania are generally lower than in many other European countries.
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
          <div className="flex justify-end items-end mt-5">
               <Link href={'/living/living-costs'} className="text-blue-500 font-roboto hover:underline">Read about living costs <FaArrowRightLong className="inline-block"/></Link>
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