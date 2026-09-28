import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';


export const metadata = {
  title: "PhD Programs in Lithuania  | Doctoral Studies in Lithuania for Indian Students",
  description: "Pursue a PhD in Lithuania with affordable tuition fees, research opportunities, scholarships, and internationally recognized doctoral degrees.",
  keywords: ["PhD in Lithuania", "Doctoral Programs Lithuania", "PhD Programs Lithuania", "Study PhD in Lithuania", "Doctorate Lithuania", "Research Programs Lithuania", "PhD Scholarships Lithuania", "Lithuania Universities PhD", "International Students PhD Lithuania", "Doctoral Studies Europe", "Lithuania Research Opportunities", "Engineering PhD Lithuania", "Business PhD Lithuania", "Computer Science PhD Lithuania", "Health Sciences PhD Lithuania", "Study in Lithuania", "Higher Education Lithuania", "Lithuania Research Universities", "PhD Admission Lithuania", "Doctoral Degree Europe"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/programmes/phd"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/programmes/phd/",
    siteName: "Study in Lithuania",
    title:
      "PhD Programs in Lithuania 2026 | Doctoral Studies in Lithuania for International Students",
    description:
      "Explore PhD programs in Lithuania with research opportunities, scholarships, affordable tuition fees, and globally recognized doctoral degrees.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
        width: 1200,
        height: 630,
        alt: "PhD Programs in Lithuania",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "PhD Programs in Lithuania 2026 | Doctoral Studies in Lithuania for International Students",
    description:
      "Explore PhD programs in Lithuania with research opportunities, scholarships, affordable tuition fees, and globally recognized doctoral degrees.",
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
        "https://www.studyinlithuania.in/study/programmes/phd/#webpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/phd/",
      name: "PhD Programs in Lithuania",
      description:
        "Explore doctoral and research degree programs in Lithuania for international students, including admission requirements, scholarships, and research opportunities.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/phd/#collectionpage",
      url:
        "https://www.studyinlithuania.in/study/programmes/phd/",
      name: "PhD Programs in Lithuania",
      description:
        "Browse doctoral and research programs offered by Lithuanian universities.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/phd/#article",
      headline:
        "PhD Programs in Lithuania for International Students",
      description:
        "Comprehensive guide to doctoral studies in Lithuania, including universities, research opportunities, scholarships, funding, and admission requirements.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/study/programmes/phd/#webpage",
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
          name: "PhD",
          item:
            "https://www.studyinlithuania.in/study/programmes/phd/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "PhD Programs in Lithuania",
      educationalLevel: "Doctoral",
      timeToComplete: "P4Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Lithuanian Universities",
      },
      description:
        "Doctoral research programs in Engineering, Information Technology, Business, Economics, Health Sciences, Social Sciences, Natural Sciences, and other disciplines.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a PhD take in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most PhD programs in Lithuania take approximately four years of full-time study and research.",
          },
        },
        {
          "@type": "Question",
          name: "Are scholarships available for PhD students in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Lithuanian universities and government institutions offer scholarships, research grants, and funding opportunities for doctoral students.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students pursue a PhD in Lithuania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Lithuania welcomes international researchers and offers several PhD programs conducted in English across multiple disciplines.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/study/programmes/phd/#image",
      contentUrl:
        "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
      caption:
        "PhD Programs and Research Opportunities in Lithuania",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Study PhD Programs in Lithuania"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>PhD Programs in Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>PhD programs in Lithuania offer advanced research opportunities, internationally recognised
            qualifications, and modern academic facilities for students aiming to build careers in research,
            teaching, and specialised industries.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering &amp; Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medical &amp; Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law &amp; Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Economics &amp; Finance</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Environmental Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Humanities &amp; Arts</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Study PhD in Lithuania?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research-focused education system</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees compared to many European countries</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;EInternationally recognised doctoral degrees</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern laboratories and research facilities</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught PhD programs available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunity to collaborate in European research projects</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe and student-friendly environment</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Master’s degree in relevant field</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research proposal or academic background</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency requirements</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Required academic and identification documents</li>
            </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Study PhD in Lithuania</h2>
            <p className='mt-5'>Lithuania is becoming a growing destination for international researchers and doctoral students
            because of its affordable education, modern universities, and strong focus on innovation and
            research development.</p>
        </div>
        <div className="flex justify-end items-end mt-5">
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