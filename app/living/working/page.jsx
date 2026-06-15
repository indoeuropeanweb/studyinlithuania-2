import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Working in Lithuania  | Student Jobs, Part-Time Work & Career Opportunities",
  description: "Discover working opportunities in Lithuania for international students, including part-time jobs, work rights, salaries, internships, and post-study employment opportunities.",
  keywords: ["Working in Lithuania", "Student Jobs Lithuania", "Part Time Jobs Lithuania", "Work While Studying Lithuania", "Lithuania Student Employment", "Jobs in Lithuania for International Students", "Lithuania Work Permit", "Lithuania Career Opportunities", "Lithuania Internship Opportunities", "Lithuania Graduate Jobs", "Lithuania Student Work Rights", "Lithuania Job Market", "Lithuania Employment Guide", "Work in Europe", "Lithuania Post Study Work", "Lithuania Work and Study", "Lithuania Student Life", "Lithuania Salaries", "International Students Lithuania", "Lithuania Career Development"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/working"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    url: "https://www.studyinlithuania.in/living/working/",
    siteName: "Study in Lithuania",
    title:
      "Working in Lithuania 2026 | Student Jobs, Part-Time Work & Career Opportunities",
    description:
      "Explore student jobs, internships, work rights, salaries and career opportunities in Lithuania for international students.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/working/working.webp",
        width: 1200,
        height: 630,
        alt: "Working in Lithuania for International Students",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Working in Lithuania 2026 | Student Jobs, Part-Time Work & Career Opportunities",
    description:
      "Explore student jobs, internships, work rights, salaries and career opportunities in Lithuania for international students.",
    images: [
      "https://www.studyinlithuania.in/images/living/working/working.webp",
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
        "@id": "https://www.studyinlithuania.in/living/working/#webpage",
        url: "https://www.studyinlithuania.in/living/working/",
        name: "Working in Lithuania",
        description:
          "Learn about student jobs, part-time work, internships, salaries, work rights and career opportunities in Lithuania for international students.",
        isPartOf: {
          "@id": "https://www.studyinlithuania.in/#website",
        },
        breadcrumb: {
          "@id":
            "https://www.studyinlithuania.in/living/working/#breadcrumb",
        },
        inLanguage: "en",
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlithuania.in/living/working/#article",
        headline: "Working in Lithuania for International Students",
        description:
          "Comprehensive guide to part-time work, internships, work rights, salaries and career opportunities in Lithuania.",
        mainEntityOfPage: {
          "@id":
            "https://www.studyinlithuania.in/living/working/#webpage",
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
          url: "https://www.studyinlithuania.in/images/living/working/working.webp",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinlithuania.in/living/working/#breadcrumb",
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
            name: "Working",
            item: "https://www.studyinlithuania.in/living/working/",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Find a Student Job in Lithuania",
        step: [
          {
            "@type": "HowToStep",
            name: "Obtain Your Student Residence Permit",
          },
          {
            "@type": "HowToStep",
            name: "Prepare a European-Style CV",
          },
          {
            "@type": "HowToStep",
            name: "Search for Part-Time Jobs and Internships",
          },
          {
            "@type": "HowToStep",
            name: "Attend Interviews",
          },
          {
            "@type": "HowToStep",
            name: "Sign an Employment Contract",
          },
          {
            "@type": "HowToStep",
            name: "Start Working Legally in Lithuania",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can international students work while studying in Lithuania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. International students are permitted to work while studying in Lithuania, subject to current immigration and residence permit regulations.",
            },
          },
          {
            "@type": "Question",
            name: "Do students need a work permit in Lithuania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Students holding the appropriate temporary residence permit for studies can work without obtaining a separate work permit.",
            },
          },
          {
            "@type": "Question",
            name: "What jobs are available for students in Lithuania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Students commonly find opportunities in customer service, hospitality, retail, logistics, IT, administration, internships and university-related roles.",
            },
          },
          {
            "@type": "Question",
            name: "Can students stay and work in Lithuania after graduation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Graduates may apply for residence permits that allow them to remain in Lithuania and seek employment after completing their studies.",
            },
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.studyinlithuania.in/living/working/#image",
        contentUrl:
          "https://www.studyinlithuania.in/images/living/working/working.webp",
        caption: "Working in Lithuania for International Students",
        representativeOfPage: true,
      },
    ],
  };

  return (
    <>
        <Breadcrumb heading={"Work in Lithuania"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div className=''>
             <h2 className='text-2xl md:text-4xl font-aino'>Work Opportunities in Lithuania for Indian Students</h2>
             <p className='text-md font-roboto mt-3 text-justify'>Lithuania is becoming a preferred destination for indian students not only because of affordable education but also because of growing career opportunities. International students in Lithuania are allowed to work while studying, helping them gain professional experience and manage their living expenses during their education journey.<br /><br />Students can work part-time during their studies as long as their job does not affect academic performance. Many students successfully balance studies and work by choosing flexible jobs and managing their schedules properly.</p>
            </div>
            <div>
              <Image className='rounded-md' width={420} height={320} src={'/images/living/working/working.webp'} alt="working in lithuania for indian students" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Part-Time Jobs in Lithuania for Students</h4>
              <div className='mt-2'>
                <p className='mt-2 text-inter text-md text-justify'>There are different types of jobs available for indian students in Lithuania depending on language skills, experience, and location.</p>
                <p className='mt-3 text-inter text-md font-medium text-justify'>Popular student jobs in Lithuania include:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Cafes and restaurants</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Customer support roles</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Retail and supermarket jobs</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Warehouse and delivery services</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Freelancing and online work</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;IT and technical support jobs</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internships and university projects</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Students studying business, IT, engineering, and healthcare may also find career-related internships during their studies.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Average Salary and Working Hours</h5>
                <p className='mt-2 text-inter text-md text-justify'>The salary in Lithuania depends on the type of work, skills, and working hours. Many students work part-time to support accommodation, food, and personal expenses while studying abroad.</p>
                <p className='mt-2 text-inter text-md text-justify'>Indian students can usually manage both studies and work comfortably with proper time management. However, universities always recommend prioritising academic performance during the study period.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>How to Find Jobs in Lithuania</h5>
                <p className='mt-2 text-inter text-md text-justify'>Indian students can search for jobs through:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;University career centres</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Online job portals</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Social networking platforms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Company websites</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Friends and student communities</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Creating a professional CV and preparing for interviews can improve job opportunities for students in Lithuania.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Career Support for Indian Students</h5>
                <p className='mt-2 text-inter text-md text-justify'>Many universities in Lithuania provide career guidance and student support services to help indian students prepare for future careers.</p>
                <p className='mt-3 text-inter text-md text-justify'>University career services may include:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;CV and resume guidance</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internship opportunities</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Interview preparation</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Career counselling</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Job fairs and networking events</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>These services help students improve professional skills and connect with employers during their studies.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Work Opportunities After Graduation</h5>
                <p className='mt-2 text-inter text-md text-justify'>Lithuania also offers career opportunities for indian graduates after completing their studies. Students may explore jobs in sectors such as:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Information Technology</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Engineering</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Healthcare</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Logistics</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Finance and Business</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Marketing and Management</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Graduates who find suitable employment opportunities may apply for further residence and work-related permissions according to Lithuanian immigration regulations.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Important Guidelines for Students</h5>
                <p className='mt-2 text-inter text-md text-justify'>Before starting work in Lithuania, students should:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Understand employment rules and regulations</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Maintain a balance between work and studies</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Follow legal work procedures</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Use official work contracts</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Avoid unofficial or illegal employment</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Working legally and responsibly helps students gain valuable international work experience while staying protected under Lithuanian employment laws.</p>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Build Your Career in Lithuania</h4>
              <p className='font-inter text-md mt-3 text-justify'>Studying and working in Lithuania can provide students with international exposure, practical experience, and career growth opportunities. With affordable living costs, growing industries, and student-friendly policies, Lithuania offers a supportive environment for students planning their future in Europe.</p>
            </div>
            <div className="flex justify-end items-end mt-5">
               <Link href={'/student-ambassadors'} className="text-blue-500 font-roboto hover:underline">Read about student ambassadors<FaArrowRightLong className="inline-block"/></Link>
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