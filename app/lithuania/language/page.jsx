import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Lithuanian Language: Expert Guide for Indian Students",
  description: "Learn the Lithuanian language before you move. Get basic phrases, pronunciation tips, and student guides. Start your study abroad prep here today.",
  keywords: [
      "Lithuanian Language",
      "Learn Lithuanian Language",
      "Lithuanian Language Guide",
      "Lithuanian Language for Students",
      "Study in Lithuania",
      "Lithuanian Language Course",
      "Lithuanian Language Basics"
  ],
  alternates: {
    canonical:"https://www.studyinlithuania.in/lithuania/language/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinlithuania.in/lithuania/language/",
    siteName: "Study in Lithuania",
    title:
      "Lithuanian Language: Expert Guide for Indian Students",
    description:
      "Learn the Lithuanian language before you move. Get basic phrases, pronunciation tips, and student guides. Start your study abroad prep here today.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        alt: "Lithuanian Language",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lithuanian Language: Expert Guide for Indian Students",
    description:
      "Learn the Lithuanian language before you move. Get basic phrases, pronunciation tips, and student guides. Start your study abroad prep here today.",
    images: [
      "https://www.studyinlithuania.in/images/logos/logo.png",
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
        url: "https://www.studyinlithuania.in/wp-content/uploads/logo.png",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinlithuania.in/lithuania/language/#webpage",
      url: "https://www.studyinlithuania.in/lithuania/language/",
      name: "Language of Lithuania",
      description:
        "Learn about the Lithuanian language, its history, significance, usage in Lithuania, and language opportunities available for international students.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/language/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/language/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/lithuania/language/#breadcrumb",
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
          name: "Lithuania",
          item: "https://www.studyinlithuania.in/lithuania/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Language",
          item: "https://www.studyinlithuania.in/lithuania/language/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Language in Lithuania: Preserving One of Europe's Oldest Living Languages"} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Language in Lithuania</h2>
        <div className=''>
        <p className='text-md font-roboto mt-3 text-justify'>
          Lithuania has a unique linguistic heritage, and the official language of the country is Lithuanian. It is considered one of the oldest living languages in Europe and holds great cultural importance in Lithuanian society. While Lithuanian is mainly used in daily life and local communication, English is widely spoken among students and young people, especially in cities and universities. This makes communication easier for international students studying in Lithuania.
        </p>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/study'} className="text-blue-500 font-roboto hover:underline">Read about study <FaArrowRightLong className="inline-block"/></Link>
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