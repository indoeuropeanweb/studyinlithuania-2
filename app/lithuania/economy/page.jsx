import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Explore Lithuania Economy: GDP, Growth and Business for Students",
  description: "Analyze the economy of Lithuania. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
  keywords: [
      "Economy of Lithuania",
      "Lithuania Economy",
      "Lithuania GDP",
      "Lithuania Industries",
      "Lithuania Economic Growth",
      "Lithuania Business",
      "Lithuania Trade",
      "Lithuania Investment",
      "Lithuania Employment",
      "Lithuania Export Economy",
      "Economy in Lithuania",
      "Study in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/lithuania/economy/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Explore Lithuania Economy: GDP, Growth and Business for Students",
    description:
      "Analyze the economy of Lithuania. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
    url: "https://www.studyinlithuania.in/lithuania/economy/",
    siteName: "Study in Lithuania",
    locale: "en_US",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        alt: "Lithuania Economy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Explore Lithuania Economy: GDP, Growth and Business for Students",
    description:
      "Analyze the economy of Lithuania. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
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
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinlithuania.in/lithuania/economy/#webpage",
      url: "https://www.studyinlithuania.in/lithuania/economy/",
      name: "Lithuania Economy",
      description:
        "Learn about Lithuania's economy, major industries, GDP growth, technology sector, exports, innovation ecosystem, manufacturing and investment opportunities.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/economy/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/economy/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlithuania.in/lithuania/economy/#breadcrumb",
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
          name: "Economy",
          item: "https://www.studyinlithuania.in/lithuania/economy/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Economy of Lithuania: Innovation, Growth and Career Opportunities in Europe'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Economy</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
            Lithuania has one of the fastest-growing economies in the Baltic region and is known for
            its stable and modern economic system. The country’s economy is mainly supported by
            industries such as information technology, manufacturing, transportation, finance,
            agriculture, and international trade. Being a member of the European Union and the
            Eurozone has helped Lithuania attract global investments and expand its business
            opportunities across Europe.<br />
            In recent years, Lithuania has become a popular hub for startups, fintech companies,
            and technology-based businesses. Cities like Vilnius are rapidly developing with modern
            infrastructure, international companies, and growing employment opportunities. The
            country also offers a strong digital economy, affordable living costs, and a business-
            friendly environment, which makes it attractive for indian students and
            professionals looking for career growth in Europe.
        </p>
        <Image className="rounded-md" width={280} height={540} src="/images/lithuania/economy/economy.webp" alt="Economy of Lithuania"/>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/lithuania/culture'} className="text-blue-500 font-roboto hover:underline">Read about culture <FaArrowRightLong className="inline-block"/></Link>
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