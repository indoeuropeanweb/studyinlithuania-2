import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';


export const metadata = {
  title: "Bachelor Degree in Lithuania: Best Universities for Indians",
  description: "Study for a Bachelor degree in Lithuania. Find English programs, low tuition fees, and scholarships for Indian students. Get expert admission help today.",
  keywords: [
      "Bachelor Degree in Lithuania",
      "Study Bachelor Degree in Lithuania",
      "Bachelor's in Lithuania",
      "Study in Lithuania",
      "Lithuania Universities",
      "Bachelor Programs in Lithuania",
      "Undergraduate Study in Lithuania",
      "Lithuania Education"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/programmes/bachelors"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/programmes/bachelors/",
    siteName: "Study in Lithuania",
    title:
      "Bachelor Degree in Lithuania: Best Universities for Indians",
    description:
      "Study for a Bachelor degree in Lithuania. Find English programs, low tuition fees, and scholarships for Indian students. Get expert admission help today.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
        width: 1200,
        height: 630,
        alt: "Bachelor's Programs in Lithuania",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bachelor Degree in Lithuania: Best Universities for Indians",
    description:
      "Study for a Bachelor degree in Lithuania. Find English programs, low tuition fees, and scholarships for Indian students. Get expert admission help today.",
    images: [
      "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
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
        "https://www.studyinlithuania.in/study/programmes/bachelors/#webpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/bachelors/",
      name: "Bachelor's Programs in Lithuania",
      description:
        "Explore undergraduate degree programs in Lithuania for international students including admission requirements, tuition fees and career opportunities.",
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
          name: "Study",
          item: "https://www.studyinlithuania.in/study/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bachelor's",
          item:
            "https://www.studyinlithuania.in/study/bachelors/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Study Bachelor’s Degrees in Lithuania"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Bachelor’s Courses in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Bachelor’s degree programs in Lithuania usually last 3–4 years and provide quality education
with practical learning.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business Administration</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medicine &amp; Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Economics &amp; Finance</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Arts &amp; Design</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;12th pass (Higher Secondary)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport</li>
          </ul>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/study/masters'} className="text-blue-500 font-roboto hover:underline">Read about masters programme <FaArrowRightLong className="inline-block"/></Link>
        </div>
      </div>
      <Script
        id="bachelors-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page