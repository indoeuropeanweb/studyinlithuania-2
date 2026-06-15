import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';

export const metadata = {
  title: "Lithuania Economy Guide 2026 | GDP, Industries, Business Environment & Economic Growth",
  description: "Explore Lithuania's economy, major industries, GDP, technology sector, exports, manufacturing, investment opportunities, and economic growth. Learn why Lithuania is one of Europe's fastest-growing and most innovative economies",
  keywords: ["Lithuania economy", "Lithuania GDP", "Lithuania economic growth", "Lithuania industries", "Lithuania business environment", "Lithuania technology sector", "Lithuania manufacturing industry", "Lithuania exports", "Lithuania investment opportunities", "Lithuania startup ecosystem", "Lithuania ICT sector", "Lithuania biotech industry", "Lithuania laser technology", "Lithuania service sector", "Lithuania economic development", "Lithuania business opportunities", "study in Lithuania", "Lithuania market overview", "Lithuania innovation economy", "Lithuania trade and exports"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/lithuania/economy"
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "article",
    title:
      "Lithuania Economy Guide 2026 | GDP, Industries, Business Environment & Economic Growth",
    description:
      "Discover Lithuania's economy, major industries, exports, manufacturing, technology sector, startups, and economic growth opportunities.",
    url: "https://www.studyinlithuania.in/lithuania/economy/",
    siteName: "Study in Lithuania",
    locale: "en_US",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/economy/economy/economy.webp",
        alt: "Lithuania Economy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Lithuania Economy Guide 2026 | GDP, Industries, Business Environment & Economic Growth",
    description:
      "Discover Lithuania's economy, major industries, exports, manufacturing, technology sector, startups, and economic growth opportunities.",
    images: [
      "https://www.studyinlithuania.in/images/economy/economy/economy.webp",
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
      "@type": "Article",
      "@id":
        "https://www.studyinlithuania.in/lithuania/economy/#article",
      headline: "Economy of Lithuania",
      description:
        "Comprehensive guide covering Lithuania's economy, GDP, industries, exports, technology sector, manufacturing, innovation, and business opportunities.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/economy/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      datePublished: "2026-06-10",
      dateModified: "2026-06-10",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinlithuania.in/wp-content/uploads/lithuania-economy.jpg",
      },
      about: {
        "@id":
          "https://www.studyinlithuania.in/lithuania/economy/#country",
      },
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
    {
      "@type": "Country",
      "@id":
        "https://www.studyinlithuania.in/lithuania/economy/#country",
      name: "Lithuania",
      description:
        "Lithuania has a modern, high-income European economy driven by services, manufacturing, information technology, biotechnology, laser technology, exports, and innovation. The country is recognized as one of the most digitalized and startup-friendly economies in Europe.",
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlithuania.in/lithuania/economy/#image",
      contentUrl:
        "https://www.studyinlithuania.in/wp-content/uploads/lithuania-economy.jpg",
      caption:
        "Lithuania's modern economy, business districts and innovation ecosystem",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Economy of Lithuania'} />
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