import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";


export const metadata = {
  title: "Cost of Living in Lithuania  | Student Expenses, Accommodation & Monthly Budget",
  description: "Discover the cost of living in Lithuania for international students, including accommodation, food, transportation, utilities, and monthly expenses. Learn how Lithuania offers an affordable European lifestyle with excellent student benefits",
  keywords: ["Cost of Living in Lithuania", "Lithuania Living Costs", "Student Expenses Lithuania", "Living Expenses Lithuania", "Study in Lithuania Cost", "Lithuania Monthly Budget", "Accommodation Cost Lithuania", "Food Cost Lithuania", "Transportation Cost Lithuania", "International Students Lithuania", "Lithuania Student Life", "Affordable Living Europe", "Lithuania Cost of Living for Students", "Lithuania Daily Expenses", "Lithuania Student Budget", "Lithuania Living Guide", "Lithuania Education Costs", "Lithuania Housing Costs", "Lithuania Affordable Study Destination", "Living in Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/living-costs"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    url: "https://www.studyinlithuania.in/living/living-costs/",
    siteName: "Study in Lithuania",
    title:
      "Cost of Living in Lithuania 2026 | Student Expenses, Accommodation & Monthly Budget",
    description:
      "Explore living costs in Lithuania including accommodation, food, transportation, utilities and monthly student expenses.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/living-cost/living-cost.webp",
        width: 1200,
        height: 630,
        alt: "Cost of Living in Lithuania",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cost of Living in Lithuania 2026 | Student Expenses, Accommodation & Monthly Budget",
    description:
      "Explore living costs in Lithuania including accommodation, food, transportation, utilities and monthly student expenses.",
    images: [
      "https://www.studyinlithuania.in/images/living/living-cost/living-cost.webp",
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
        url: "https://www.studyinlithuania.in/images/logoa/logo.webp",
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
        "https://www.studyinlithuania.in/living/living-costs/#webpage",
      url:
        "https://www.studyinlithuania.in/living/living-costs/",
      name: "Cost of Living in Lithuania",
      description:
        "Learn about student living expenses in Lithuania, including accommodation, food, transportation, utilities and monthly budgets.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/living/living-costs/#article",
      headline:
        "Cost of Living in Lithuania for International Students",
      description:
        "Comprehensive guide to accommodation costs, food expenses, transportation, utilities and overall student living costs in Lithuania.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/living/living-costs/#webpage",
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
        url: "https://www.studyinlithuania.in/images/living/living-cost/living-cost.webp",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/living/living-costs/#breadcrumb",
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
          name: "Living Costs",
          item:
            "https://www.studyinlithuania.in/living/living-costs/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to live in Lithuania as a student?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "International students typically spend between €400 and €900 per month depending on their city, accommodation type and lifestyle.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lithuania affordable for international students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lithuania is considered one of the most affordable countries in Europe for international students, with lower living and accommodation costs than many Western European countries.",
          },
        },
        {
          "@type": "Question",
          name: "How much does student accommodation cost in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "University dormitories generally cost between €80 and €250 per month, while private apartments may range from €250 to €600 per month depending on location.",
          },
        },
        {
          "@type": "Question",
          name: "Do students receive discounts in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Students can benefit from discounted public transportation, cultural events, museums and various student services.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/living/living-costs/#image",
      contentUrl:
       "https://www.studyinlithuania.in/images/living/living-cost/living-cost.webp",
      caption:
        "Cost of Living in Lithuania for International Students",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
        <Breadcrumb heading={"Living Costs of Lithuania"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div className=''>
          <h2 className='text-2xl md:text-4xl font-aino'>Living Cost in Lithuania for Indian Students</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Understanding the living cost in Lithuania is an important part of planning your study abroad journey. Lithuania is considered one of the more affordable European destinations, offering a good balance between quality education and reasonable lifestyle expenses for Indian students.<br />
            On average, a student can manage monthly expenses in Lithuania within €350–€700, depending on lifestyle, city, and accommodation type. Cities like Vilnius and Kaunas may be slightly higher in cost compared to smaller towns, but overall Lithuania remains budget-friendly for students.
            </p>
            </div>
            <div>
              <Image className="rounded-md" width={420} height={320} src="/images/living/living-cost/living-cost.webp" alt="living cost in lithuania while studying" />
            </div>
            </div>
            <div className='mt-5'>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Accommodation Expenses</h5>
                <p className='mt-2 text-inter text-md text-justify'>Housing is the biggest part of a student’s budget in Lithuania. Students can choose between university dormitories, shared apartments, or private rentals.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>University dormitories:</b> €120–€300 per month</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Shared apartments:</b> €200–€450 per month</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Private apartments:</b> €350–€650 per month</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Living in university accommodation also allows students to interact with classmates and
                    experience multicultural student life more easily.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Monthly Food & Grocery Cost</h5>
                <p className='mt-2 text-inter text-md text-justify'>Food expenses in Lithuania are quite manageable for students. Most universities also have cafeterias that offer affordable meal options.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Average monthly food cost:</b> €150–€300</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>University cafeteria meals:</b> budget-friendly daily options</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Eating out occasionally:</b> moderate pricing depending on restaurant type</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Students who cook at home can reduce their monthly food expenses even further.</p>
              </div>
            </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Transportation Cost in Lithuania</h5>
                <p className='mt-2 text-inter text-md text-justify'>Public transport in Lithuania is well-connected and affordable for students. Cities like Vilnius and Kaunas offer student discounts on monthly transport passes.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Monthly student transport pass: </b> approx. €5–€15</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>ingle ticket:</b> around €0.50–€1.00</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Intercity travel (bus/train):</b> €5–€15 depending on distance</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Many students prefer public transport or cycling, as most facilities are located within easy reach</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Lifestyle, Entertainment & Personal Expenses</h5>
                <p className='mt-2 text-inter text-md text-justify'>Apart from basic needs, students also spend on entertainment, social life, and personal activities. Lithuania offers a balanced student lifestyle with reasonable costs.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Movie tickets: </b> €5–€10</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>C €20–€50 per month</b></li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Social outings and cafés: </b> €50–€150 monthly (depending on lifestyle)</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Students can comfortably enjoy social activities without putting too much pressure on their budget.</p>
              </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Final Overview</h4>
              <p className='font-inter text-md mt-3 text-justify'>Overall, Lithuania offers an affordable and student-friendly cost of living compared to many other European countries. With proper budgeting, students can easily manage their monthly expenses while enjoying a comfortable and active student life in Europe.</p>
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