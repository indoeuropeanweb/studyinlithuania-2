import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Study for a Master's Degree in Lithuania University",
  description: "Master's courses in Lithuania. Get English-taught degrees from top University with their tuition. Get admission and scholarships. apply your application Now.",
  keywords: [
      "Master's Courses in Lithuania",
      "Masters in Lithuania",
      "Study Masters in Lithuania",
      "Lithuania Masters Programs",
      "Universities in Lithuania for Masters",
      "MS in Lithuania",
      "Master's Degree in Lithuania",
      "Study in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/masters"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/masters/",
    siteName: "Study in Lithuania",
    title:
      "Study for a Master's Degree in Lithuania University",
    description:
      "Master's courses in Lithuania. Get English-taught degrees from top University with their tuition. Get admission and scholarships. apply your application Now.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
        width: 1200,
        height: 630,
        alt: "Master's Programs in Lithuania",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Study for a Master's Degree in Lithuania University",
    description:
      "Master's courses in Lithuania. Get English-taught degrees from top University with their tuition. Get admission and scholarships. apply your application Now.",
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
        "https://www.studyinlithuania.in/study/masters/#webpage",
      url:
        "https://www.studyinlithuania.in/study/masters/",
      name: "Master's Programs in Lithuania",
      description:
        "Explore Master's degree programs in Lithuania for international students including admission requirements, tuition fees, scholarships and career opportunities.",
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
          name: "Master's",
          item:
            "https://www.studyinlithuania.in/study/masters/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "Master's Degree Programs in Lithuania",
      educationalLevel: "Postgraduate",
      timeToComplete: "P1Y-P2Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Lithuanian Universities",
      },
      description:
        "Master's degree programs offered in English across Engineering, Information Technology, Business, Management, Health Sciences, Social Sciences and other disciplines.",
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Study Master's Degrees in Lithuania"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Master’s Courses in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Master’s degree programs in Lithuania are advanced study programs that usually last 1–2
years and focus on specialised knowledge and career development.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medicine &amp; Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance &amp; Economics</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Arts &amp; Design</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose Master’s in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees in Europe</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;EU-recognised degrees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong focus on research and practical learning</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Good job and career opportunities in Europe</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe and student-friendly environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Bachelor’s degree in relevant field</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency (IELTS or equivalent if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport and academic documents</li>
            </ul>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/study/phd'} className="text-blue-500 font-roboto hover:underline">Read about PhD programme <FaArrowRightLong className="inline-block"/></Link>
        </div>
      </div>
      <Script
        id="masters-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page