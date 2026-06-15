import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Lithuanian Language Guide  | Official Language of Lithuania, Usage & Student Life",
  description: "Learn about the Lithuanian language, the official language of Lithuania and one of the oldest living Indo-European languages. Discover its importance, usage in daily life, English proficiency, and language opportunities for international students studying in Lithuania.",
  keywords: ["Lithuanian Language", "Official Language of Lithuania", "Language in Lithuania", "Lithuanian Speaking Population", "Study in Lithuania Language", "English in Lithuania", "Lithuania Language Guide", "Lithuanian Culture and Language", "Lithuanian for International Students", "Lithuania Education Language", "Baltic Languages", "Indo European Languages", "Lithuanian Communication", "Lithuania Student Life", "Learn Lithuanian", "Lithuania Language Course", "Lithuanian Heritage", "Lithuania Living Guide", "Lithuania for International Students", "Lithuanian Language Facts"],
  alternates: {
    canonical:"https://www.studyinlithuania.in/lithuania/language"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://www.studyinlithuania.in/lithuania/language/",
    siteName: "Study in Lithuania",
    title:
      "Lithuanian Language Guide 2026 | Official Language of Lithuania, Usage & Student Life",
    description:
      "Discover the Lithuanian language, its history, significance, English usage, and language opportunities for international students studying in Lithuania.",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/language/language.webp",
        alt: "Lithuanian Language",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lithuanian Language Guide 2026 | Official Language of Lithuania, Usage & Student Life",
    description:
      "Discover the Lithuanian language, its history, significance, English usage, and language opportunities for international students studying in Lithuania.",
    images: [
      "https://www.studyinlithuania.in/images/language/language.webp",
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
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/lithuania/language/#article",
      headline: "Lithuanian Language",
      description:
        "Comprehensive guide to the Lithuanian language, one of the oldest living Indo-European languages, and its role in education, culture, and everyday life in Lithuania.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/language/#webpage",
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
        url: "https://www.studyinlithuania.in/wp-content/uploads/lithuanian-language.jpg",
      },
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
    {
      "@type": "Country",
      "@id":
        "https://www.studyinlithuania.in/lithuania/language/#country",
      name: "Lithuania",
      description:
        "Lithuanian is the official language of Lithuania and one of the oldest living Indo-European languages. English is widely spoken among students and young professionals, making Lithuania an attractive destination for international students.",
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/lithuania/language/#image",
      contentUrl:
        "https://www.studyinlithuania.in/wp-content/uploads/lithuanian-language.jpg",
      caption:
        "Lithuanian language, culture and education in Lithuania",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Language in Lithuania'} />
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