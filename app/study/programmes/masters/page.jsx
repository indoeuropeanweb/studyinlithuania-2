import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Master’s Programs in Lithuania  | Study Master's Degree in Lithuania for Indian Students",
  description: "Study Master's programs in Lithuania with affordable tuition fees, English-taught courses, scholarships, and globally recognized degrees.",
  keywords: ["Masters in Lithuania", "Master's Programs Lithuania", "Study Masters in Lithuania", "Postgraduate Courses Lithuania", "MSc in Lithuania", "MBA in Lithuania", "Engineering Masters Lithuania", "IT Masters Lithuania", "Business Masters Lithuania", "Lithuania Universities", "Lithuania Higher Education", "International Students Lithuania", "English Taught Masters Lithuania", "Study Abroad Lithuania", "Lithuania Scholarships", "Affordable Masters Europe", "Lithuania Student Visa", "Lithuania Education", "Masters Degree Europe", "Postgraduate Study Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/programmes/masters"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/programmes/masters/",
    siteName: "Study in Lithuania",
    title:
      "Master's Programs in Lithuania 2026 | Study Master's Degree in Lithuania",
    description:
      "Explore Master's programs in Lithuania including tuition fees, scholarships, admission requirements, and top universities.",
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
      "Master's Programs in Lithuania 2026 | Study Master's Degree in Lithuania",
    description:
      "Explore Master's programs in Lithuania including tuition fees, scholarships, admission requirements, and top universities.",
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
        "https://www.studyinlithuania.in/study/programmes/masters/#webpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/masters/",
      name: "Master's Programs in Lithuania",
      description:
        "Explore Master's degree programs in Lithuania for international students including admission requirements, tuition fees, scholarships and career opportunities.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/masters/#collectionpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/masters/",
      name: "Master's Programs in Lithuania",
      description:
        "Browse Master's degree programs offered by Lithuanian universities for international students.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/masters/#article",
      headline:
        "Master's Programs in Lithuania for International Students",
      description:
        "Comprehensive guide to Master's studies in Lithuania including universities, tuition fees, scholarships, admission requirements and career opportunities.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/study/programmes/masters/#webpage",
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
          name: "Master's",
          item:
            "https://www.studyinlithuania.in/study/programmes/masters/",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a Master's degree take in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Master's degree programs in Lithuania take between 1 and 2 years to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students study Master's programs in English in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Lithuanian universities offer Master's degree programs fully taught in English.",
          },
        },
        {
          "@type": "Question",
          name: "What are the tuition fees for Master's programs in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tuition fees generally range from €2,000 to €6,000 per year depending on the university and program.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/masters/#image",
      contentUrl:
        "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
      caption:
        "Master's Programs in Lithuania for International Students",
      representativeOfPage: true,
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
            <Link href={'/study/programmes/phd'} className="text-blue-500 font-roboto hover:underline">Read about PhD programme <FaArrowRightLong className="inline-block"/></Link>
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