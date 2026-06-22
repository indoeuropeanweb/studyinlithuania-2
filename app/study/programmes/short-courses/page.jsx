import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Short Courses in Lithuania  | Certificate, Diploma & Professional Courses",
  description: "Explore short courses in Lithuania for international students. Gain industry-focused skills through certificate, diploma, and professional programs.",
  keywords: ["Short Courses in Lithuania", "Lithuania Certificate Courses", "Professional Courses Lithuania", "Diploma Courses Lithuania", "Study Short Courses in Lithuania", "Lithuania Training Programs", "Lithuania Professional Development", "Skill Development Courses Lithuania", "International Students Lithuania", "Lithuania Education", "Short Term Courses Europe", "Online Courses Lithuania", "Technical Courses Lithuania", "Business Courses Lithuania", "IT Courses Lithuania", "Study in Lithuania", "Lithuania Career Development", "European Certification Courses", "Lithuania Learning Programs", "Lithuania Higher Education"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/programmes/short-courses"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/programmes/short-courses/",
    siteName: "Study in Lithuania",
    title:
      "Short Courses in Lithuania 2026 | Certificate, Diploma & Professional Courses",
    description:
      "Explore short courses, certificate programs, diploma courses and professional training opportunities in Lithuania.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
        width: 1200,
        height: 630,
        alt: "Short Courses in Lithuania",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Short Courses in Lithuania 2026 | Certificate, Diploma & Professional Courses",
    description:
      "Explore short courses, certificate programs, diploma courses and professional training opportunities in Lithuania.",
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
        "https://www.studyinlithuania.in/study/programmes/short-courses/#webpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/short-courses/",
      name: "Short Courses in Lithuania",
      description:
        "Explore short courses, certificate programs, diploma courses and professional training opportunities in Lithuania.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/short-courses/#collectionpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/short-courses/",
      name: "Short Courses in Lithuania",
      description:
        "Browse short-term certificate, diploma and professional development courses available in Lithuania.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/short-courses/#article",
      headline:
        "Short Courses in Lithuania for International Students",
      description:
        "Guide to short courses, professional certifications, diploma programs and skill development opportunities in Lithuania.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/study/programmes/short-courses/#webpage",
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
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
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
          name: "Short Courses",
          item:
            "https://www.studyinlithuania.in/study/programmes/short-courses/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "Short Courses in Lithuania",
      educationalLevel: "Certificate and Professional Training",
      occupationalCategory: "Professional Education",
      provider: {
        "@type": "Organization",
        name: "Lithuanian Universities and Training Institutes",
      },
      description:
        "Short-term professional, technical, business, IT, language and skill-development courses designed for students and working professionals.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are short courses in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Short courses are specialized training or certificate programs that focus on practical skills and professional development, usually lasting from a few weeks to several months.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students enroll in short courses in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Lithuanian institutions offer short courses and professional certification programs for international students.",
          },
        },
        {
          "@type": "Question",
          name: "What fields are available for short courses in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular areas include Information Technology, Business, Management, Engineering, Digital Marketing, Languages, Healthcare, and Professional Development.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/short-courses/#image",
      contentUrl:
        "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
      caption:
        "Short Courses and Professional Training Programs in Lithuania",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Professional Training Programs in Lithuania.'}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Short Courses in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Short courses in Lithuania are designed to help students and professionals gain practical skills,
            industry knowledge, and international learning experience in a shorter duration.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Digital Marketing</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance &amp; Accounting</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Hospitality &amp; Tourism</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Design &amp; Creative Arts</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Healthcare &amp; Public Health</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Language Programs</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose Short Courses in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable course fees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Practical and skill-based learning</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International study exposure</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Short duration and flexible study options</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern learning environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Basic academic qualifications</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport and documents</li>
            </ul>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/study/admission'} className="text-blue-500 font-roboto hover:underline">Read about admission <FaArrowRightLong className="inline-block"/></Link>
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