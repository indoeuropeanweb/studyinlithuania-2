import LithuaniaClient from "./LithuaniaClient";


export const metadata = {
  title: "Study in Lithuania for Indian Students | Benefits, Universities & Career",
  description: "Discover why Indian students choose Lithuania for higher education. Learn about affordable universities, European degrees, part-time work, career opportunities, lifestyle, and expert study abroad guidance.",
  keywords: ["study in Lithuania", "study in Lithuania for Indian students", "Lithuania education", "Lithuanian universities", "study abroad Lithuania", "Lithuania study consultant", "Lithuanian study consultants in Delhi", "benefits of studying in Lithuania", "Europe study abroad", "affordable study in Europe"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/lithuania"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    title:
      "Study in Lithuania for Indian Students | Benefits, Universities & Career",
    description:
      "Explore the advantages of studying in Lithuania, including affordable education, European universities, part-time work options, global exposure, and career opportunities.",
    url: "https://www.studyinlithuania.in/lithuania/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Lithuania",
      },
    ]
   },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in Lithuania for Indian Students | Benefits, Universities & Career",
    description:
      "Explore the advantages of studying in Lithuania.",
    images: [
      "https://www.studyinlithuania.in/images/logos/logo.png",
    ],
  },
}

export default function Home() {

    const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/#organization",
        "name": "Study in Lithuania",
        "url": "https://www.studyinlithuania.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlithuania.in/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/lithuania/#webpage",
        "url": "https://www.studyinlithuania.in/lithuania/",
        "name":
          "Study in Lithuania for Indian Students | Benefits, Universities & Career",
        "description":
          "Discover why Indian students choose Lithuania for higher education."
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlithuania.in/lithuania/#article",
        "headline":
          "Study in Lithuania — Explore a Smarter Way to Grow in Europe",
        "description":
          "Information for Indian students about studying in Lithuania.",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinlithuania.in/lithuania/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlithuania.in/lithuania/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should Indian students study in Lithuania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Lithuania offers affordable European education and globally recognized degrees."
            }
          }
        ]
      }
    ]
  };


  return (
    <>
     <LithuaniaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
