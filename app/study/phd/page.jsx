import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';


export const metadata = {
  title: "PhD in Lithuania | Get Top University Admission in Lithuania",
  description: "Study a PhD in Lithuania as an Indian student. Find top universities, tuition costs, and scholarship tips. with the help of our expert. Contact us",
  keywords: [
      "PhD in Lithuania",
      "Doctoral Programs in Lithuania",
      "Study PhD in Lithuania",
      "Lithuania PhD Universities",
      "PhD Admission in Lithuania",
      "PhD in Lithuania for Indian Students",
      "Doctorate in Lithuania",
      "Research Programs in Lithuania",
      "Scholarships for PhD in Lithuania",
      "Lithuania Student Visa",
      "Study in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/phd"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/study/phd/",
    siteName: "Study in Lithuania",
    title:
      "PhD in Lithuania | Get Top University Admission in Lithuania",
    description:
      "Study a PhD in Lithuania as an Indian student. Find top universities, tuition costs, and scholarship tips. with the help of our expert. Contact us",
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
      "PhD in Lithuania | Get Top University Admission in Lithuania",
    description:
      "Study a PhD in Lithuania as an Indian student. Find top universities, tuition costs, and scholarship tips. with the help of our expert. Contact us",
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
        "https://www.studyinlithuania.in/study/phd/#webpage",
      url:
        "https://www.studyinlithuania.in/study/phd/",
      name: "PhD Programs in Lithuania",
      description:
        "Explore doctoral and research degree programs in Lithuania for international students, including admission requirements, scholarships, and research opportunities.",
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
          name: "PhD",
          item:
            "https://www.studyinlithuania.in/study/phd/",
        },
      ],
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
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>PhD Courses</h2>
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