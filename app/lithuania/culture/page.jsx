import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
    title: "Lithuanian Culture Guide | Traditions, Festivals, Language, Food & Lifestyle",
    description: "Discover Lithuania's rich cultural heritage, traditions, festivals, language, cuisine, arts, music, and modern lifestyle. Learn about Lithuanian customs, student life, and cultural experiences in one of Europe's most vibrant Baltic nations.",
    keywords: ["Lithuanian Culture", "Lithuania Culture", "Lithuanian Traditions", "Lithuania Festivals", "Lithuanian Language", "Lithuania Lifestyle", "Lithuanian Heritage", "Lithuania Customs", "Lithuanian Food", "Lithuania Cuisine", "Lithuania Arts and Music", "Lithuania Cultural Heritage", "Lithuania Student Life", "Baltic Culture", "Lithuania Society", "Study in Lithuania", "Lithuanian Celebrations", "Lithuania Folk Traditions", "Lithuania History and Culture", "Culture of Lithuania"],
    alternates: {
      canonical: "https://www.studyinlithuania.in/lithuania/culture"
    },
    robots: {
      index: true,
      follow: true,
    },
      openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://www.studyinlithuania.in/lithuania/culture/",
    siteName: "Study in Lithuania",
    title:
      "Lithuanian Culture Guide 2026 | Traditions, Festivals, Language, Food & Lifestyle",
    description:
      "Explore Lithuania's traditions, festivals, language, cuisine, arts, music and cultural heritage. Learn about student life and everyday culture in Lithuania.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/culture/culture.webp",
        alt: "Lithuanian Culture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Lithuanian Culture Guide 2026 | Traditions, Festivals, Language, Food & Lifestyle",
    description:
      "Explore Lithuania's traditions, festivals, language, cuisine, arts, music and cultural heritage.",
    images: [
      "https://www.studyinlithuania.in/images/culture/culture.webp",
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
        "https://www.studyinlithuania.in/lithuania/culture/#webpage",
      url: "https://www.studyinlithuania.in/lithuania/culture/",
      name: "Lithuanian Culture",
      description:
        "Explore Lithuania's traditions, language, festivals, cuisine, arts, music, and cultural heritage.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/culture/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/culture/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/lithuania/culture/#article",
      headline: "Culture of Lithuania",
      description:
        "A complete guide to Lithuanian culture, traditions, language, festivals, arts, cuisine, and lifestyle.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/culture/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinlithuania.in/wp-content/uploads/lithuania-culture.jpg",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/lithuania/culture/#breadcrumb",
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
          name: "Culture",
          item: "https://www.studyinlithuania.in/lithuania/culture/",
        },
      ],
    },
    {
      "@type": "Country",
      "@id":
        "https://www.studyinlithuania.in/lithuania/culture/#country",
      name: "Lithuania",
      description:
        "Lithuania is known for its rich cultural heritage, folk traditions, song festivals, unique Baltic language, historic customs, vibrant arts scene, and modern European lifestyle.",
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/lithuania/culture/#image",
      contentUrl:
        "https://www.studyinlithuania.in/wp-content/uploads/lithuania-culture.jpg",
      caption:
        "Traditional Lithuanian culture, heritage, music, festivals and lifestyle",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Culture of Lithuania'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Unique Culture</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
          Lithuania has a rich cultural heritage influenced by European traditions, history, art, and folklore. The country is known for its traditional music, folk dances, colorful festivals, and strong connection to nature. Lithuanian people highly value family, education, and cultural traditions, which can be seen in their celebrations and daily lifestyle. Along with preserving its old traditions, Lithuania also has a modern and welcoming culture that makes indian students feel comfortable and accepted.
        </p>
        <Image className="rounded-md" width={320} height={240} src="/images/lithuania/culture/culture.webp" alt="Culture of Lithuania"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Interesting Facts About Lithuanian Culture</h2>
            <ul className='mt-5 space-y-2'>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania has one of the oldest languages in Europe, the Lithuanian language.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Folk music and traditional dances are an essential part of Lithuanian culture.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	The country has many cultural festivals, which are celebrated throughout the year.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania considers basketball to be the most popular sport.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Traditional Lithuanian cuisine consists of dishes with potatoes, bread, dairy products, and meat.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania puts a high value on education, the arts, and literature.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuanian culture is famous for different traditional handicrafts and wooden art.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania’s Christmas Eve customs are distinctive and commonly observed with family.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;  The country has a close relationship with nature, woods, and country traditions.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Lithuania is a mix of a modern European way of life and historical traditions. </li>
            </ul>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/lithuania/life-style-and-character'} className="text-blue-500 font-roboto hover:underline">Read about life style and character <FaArrowRightLong className="inline-block"/></Link>
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