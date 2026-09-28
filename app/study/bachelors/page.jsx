import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';


export const metadata = {
  title: "Bachelor’s Programs in Lithuania  | Study Undergraduate Degrees in Lithuania",
  description: "Study Bachelor's programs in Lithuania with affordable fees, English-taught courses, scholarships, and globally recognized degrees.",
  keywords: ["Bachelors in Lithuania", "Bachelor Programs in Lithuania", "Undergraduate Degree Lithuania", "Study Bachelors in Lithuania", "Lithuania Bachelor Courses", "Engineering in Lithuania", "Computer Science Lithuania", "Business Studies Lithuania", "International Students Lithuania", "English Taught Programs Lithuania", "Lithuania Universities", "Study in Europe", "Lithuania Higher Education", "Bachelor Degree Europe", "Lithuania Admission Requirements", "Lithuania Scholarships", "Affordable Education Europe", "Lithuania Student Visa", "Lithuania Undergraduate Programs", "Study Abroad Lithuania"],
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
      "Bachelor's Programs in Lithuania 2026 | Study Undergraduate Degrees in Lithuania",
    description:
      "Explore Bachelor's programs in Lithuania including tuition fees, admission requirements, scholarships, and top universities for international students.",
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
      "Bachelor's Programs in Lithuania 2026 | Study Undergraduate Degrees in Lithuania",
    description:
      "Explore Bachelor's programs in Lithuania including tuition fees, admission requirements, scholarships, and top universities for international students.",
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
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      url: "https://www.studyinlithuania.in",
      name: "Study in Lithuania",
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
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
      "@type": "EducationalOccupationalProgram",
      name: "Bachelor's Degree Programs in Lithuania",
      educationalLevel: "Undergraduate",
      timeToComplete: "P3Y-P4Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Lithuanian Universities",
      },
      description:
        "Undergraduate degree programs offered in English across Engineering, IT, Business, Health Sciences, Social Sciences and other disciplines.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/bachelors/#article",
      headline:
        "Bachelor's Programs in Lithuania for International Students",
      description:
        "Comprehensive guide to Bachelor's studies in Lithuania including tuition fees, admission requirements, universities and career opportunities.",
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinlithuania.in/images/logos/lithuania-01.webp",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long is a Bachelor's degree in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Bachelor's degree programs in Lithuania take 3 to 4 years to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students study in English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Lithuanian universities offer Bachelor's programs fully taught in English.",
          },
        },
        {
          "@type": "Question",
          name: "What are the tuition fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tuition fees generally range from €1,300 to €4,000 per year.",
          },
        },
      ],
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
          name: "Programmes",
          item: "https://www.studyinlithuania.in/study/programmes/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bachelor's",
          item:
            "https://www.studyinlithuania.in/study/programmes/bachelors/",
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