import Breadcrumb from '@/app/components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Guide to Seasons and Nature, Climate in Lithuania For Student",
  description: "Explore Climate in Lithuania and four seasons. Learn about weather conditions, temperatures, and student life in Latvia. Plan your move with our expert guide.",
  keywords: [
      "Climate in Lithuania",
      "Lithuania Climate",
      "Weather in Lithuania",
      "Lithuania Weather",
      "Seasons in Lithuania",
      "Nature in Lithuania",
      "Lithuania Temperature",
      "Lithuania Winter",
      "Lithuania Summer",
      "Study in Lithuania",
      "Lithuania for International Students",
      "Lithuania Environment"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/lithuania/nature-and-climate/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Guide to Seasons and Nature, Climate in Lithuania For Student",
    description:
      "Explore Lithuania's nature and climate, from beautiful forests and lakes to its four distinct seasons. Learn about weather conditions, temperatures, and student life in Lithuania.",
    url: "https://www.studyinlithuania.in/lithuania/nature-and-climate/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Nature and Climate of Lithuania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Guide to Seasons and Nature, Climate in Lithuania For Student",
    description:
      "Explore Lithuania's nature and climate, from beautiful forests and lakes to its four distinct seasons. Learn about weather conditions, temperatures, and student life in Lithuania.",
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
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinlithuania.in/lithuania/nature-and-climate/#webpage",
      url:
        "https://www.studyinlithuania.in/lithuania/nature-and-climate/",
      name: "Lithuania Nature and Climate",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      about: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/nature-and-climate/#country",
      },
      description:
        "Learn about Lithuania's climate, seasons, forests, lakes, biodiversity, and natural landscapes. Explore why Lithuania is considered one of Europe's greenest countries.",
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/nature-and-climate/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/lithuania/nature-and-climate/#breadcrumb",
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
          name: "Nature and Climate",
          item:
            "https://www.studyinlithuania.in/lithuania/nature-and-climate/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Nature and Climate of Lithuania: A Perfect Blend of Green Landscapes and Four Beautiful Seasons'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Nature and Weather</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
            Lithuania is famous for its delightful natural scenery, tranquil environment, and hygienic
            surroundings. The country is made up of woods, rivers, lakes, and a calm atmosphere.
            Lithuania has a moderate climate with four seasons. Summers are pleasant, while
            winters can be snowy and cold. Changing seasons provide international learners with a
            unique experience.
        </p>
        <Image className="rounded-md" width={320} height={140} src="/images/lithuania/nature-and-weather/nature-and-weather.webp" alt="nature and weather of lithuania"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Key highlights of Lithuania&#39;s Weather and Climate</h2>
            <ul className='mt-5 space-y-2'>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Forest Coverage:</b> About one-third of the country is covered with forests.</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Famous Natural Features:</b> Lakes, Rivers, Green Parks, Sand Dunes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Climate Type:</b> Moderate continental climate.</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Summer temperature:</b> Usually between 20°C and 25°C</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Winter Temperature:</b> Usually -5°C to 5°C</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Best Season to Visit:</b> Spring and summer months</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Air Quality:</b> Clean, environmentally friendly</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>International Student Friendly:</b> Yes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Popular Nature Areas: </b> National parks, the Baltic coast, and countryside areas</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Winter Snow:</b> Typical December through February</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Daylight:</b> Longer days in summer, shorter days in winter</li>
            </ul>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/lithuania/economy'} className="text-blue-500 font-roboto hover:underline">Read about economy <FaArrowRightLong className="inline-block"/></Link>
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