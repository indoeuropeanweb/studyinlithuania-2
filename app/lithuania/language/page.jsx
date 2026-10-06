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
          Lithuania has a unique linguistic heritage, and the official language of the country is Lithuanian. It is considered one of the oldest living languages in Europe and holds great cultural importance in Lithuanian society. While Lithuanian is mainly used in daily life and local communication, English is widely spoken among students and young people, especially in cities and universities. This makes communication easier for <Link className="font-semibold hover:underline" href="/study">indian students studying in Lithuania</Link>.
        </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-roboto text-gray-700">Learn Lithuanian Language</h3>
          <p className='text-md font-roboto mt-3 text-justify'>
            For students intending to Learn Lithuanian Language, they can be good at the beginning with some elementary vocabulary, greeting formulas, numeral names, and how to go about getting your bearings and other typical conversational elements. There may be chances at universities, language schools, and other education establishments to acquire Lithuanian by taking up classroom or distance-learning courses.
            <br />
            Knowing the local language helps you not just to communicate - it gives you much more insight into Lithuanian traditions, history, culture, and everyday life.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-roboto text-gray-700">The Fundamentals of Lithuanian Language</h3>
          <p className='text-md font-roboto mt-3 text-justify'>
            You can start off by getting a hold of the Fundamentals of Lithuanian Language. International students can slowly widen their vocabulary by familiarizing themselves with the most common words and phrases covering introductory situations, shopping, food, transportation, university life, and conversations in general.
            <br />
            <br />
            <span className="font-semibold text-lg text-gray-700 mb-5">Students, for example, may want to concentrate on:</span>
            <br />
            Simple greetings and introduction phrasesNumbers and how to say datesUseful questions that come up often and their answersPhrase and words to ask for directions and talk about transportation methodsTerms to identify your favourite dishes or food and vocabulary for shopping Vocabulary on university life and in the classroomWords used in everyday conversations
            <br />
            <br />
            By getting a hang of these basics, students will find daily interactions less complicated, and they will also become more aware of what the Lithuanian language sounds like and how words are ordered together.
          </p>
        </div>
        <div className="mt-5">
           <h3 className="text-xl font-roboto text-gray-700">Is Lithuanian a Difficult Language to Pick Up?</h3>
           <p className='text-md font-roboto mt-3 text-justify'>
            Lithuanian may strike international students as a very strange, very different language for quite a few reasons: the words, the grammar - in short, everything in Lithuanian is quite removed from English and so, very differently than English it is from most other languages.
            <br />
            <br />
            On the other hand, students are not required to attain fluency very quickly. It suffices to begin with simple and useful words and phrases and then expand vocabulary gradually. The whole process gets more comfortable when broken up into smaller units of learning and done one after the other instead of all at once.
            <br />
            <br />
            The best way to do this is to practice on a regular basis and to engage with the language outside the language classroom. A student can combine classroom lessons with actual speaking conversations, study via smart phones, reading, and listening to spoken language to improve language ​proficiency
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