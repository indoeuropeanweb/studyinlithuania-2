import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Lithuania for Indian Students | Universities, Visa & Admission",
  description: "Study in Lithuania with expert guidance for Indian students. Explore top Lithuanian universities, admission requirements, tuition fees, scholarships, student visa process, accommodation, and career opportunities.",
  keywords: ["study in Lithuania", "study in Lithuania for Indian students", "Lithuania universities", "Lithuania admission", "Lithuania student visa", "scholarships in Lithuania", "MBBS in Lithuania", "masters in Lithuania", "bachelors in Lithuania", "study abroad Lithuania", "Lithuania education consultant", "Lithuania education"],
  alternates: {
    canonical: "https://www.studyinlithuania.in"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Study in Lithuania for Indian Students | Admissions, Universities, Visa & Scholarships",
    description:
      "Explore top Lithuanian universities, admission process, scholarships, tuition fees and student visa guidance for Indian students.",
    url: "https://www.studyinlithuania.in/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Study in Lithuania",
      },
    ],
  },
}

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/#organization",
        "name": "Study in Lithuania",
        "url": "https://www.studyinlithuania.in/",
        "logo": "https://www.studyinlithuania.in/images/logo/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinlithuania.in/#website",
        "url": "https://www.studyinlithuania.in/",
        "name": "Study in Lithuania",
        "publisher": {
          "@id": "https://www.studyinlithuania.in/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/#webpage",
        "url": "https://www.studyinlithuania.in/",
        "name":
          "Study in Lithuania for Indian Students | Admissions, Universities, Visa & Scholarships",
        "description":
          "Study in Lithuania with expert guidance for Indian students.",
        "isPartOf": {
          "@id": "https://www.studyinlithuania.in/#website"
        },
        "about": {
          "@id": "https://www.studyinlithuania.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlithuania.in/faq/#faq",
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

export default function Home() {
  return (
    <>
     <HomeClient />
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
      />
    </>
  );
}
