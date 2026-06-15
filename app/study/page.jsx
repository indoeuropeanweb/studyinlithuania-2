import StudyClient from "./StudyClient";


export const metadata = {
  title: "Why Study in Lithuania? | Universities, Courses & Benefits for Indian Students",
  description: "Discover why Indian students choose to study in Lithuania. Explore affordable tuition fees, English-taught programs, EU-recognized degrees, scholarships, part-time work, and career opportunities.",
  keywords: ["why study in Lithuania", "study in Lithuania", "study in Lithuania for Indian students", "Lithuanian universities", "English taught programs Lithuania", "affordable study in Europe", "Lithuania courses", "Lithuania scholarships", "Lithuania student visa", "study abroad Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study"
  },
      robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    title:
      "Why Study in Lithuania? | Universities, Courses & Benefits for Indian Students",
    description:
      "Learn why Lithuania is becoming a popular European study destination.",
    url: "https://www.studyinlithuania.in/study/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Lithuania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Why Study in Lithuania? | Universities, Courses & Benefits for Indian Students",
    description:
      "Learn why Lithuania is becoming a popular European study destination.",
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
        "@id": "https://www.studyinlithuania.in/contact",
        "name": "Study in Lithuania",
        "url": "https://www.studyinlithuania.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlithuania.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/study/#webpage",
        "url": "https://www.studyinlithuania.in/study/",
        "name":
          "Why Study in Lithuania? | Universities, Courses & Benefits for Indian Students",
        "description":
          "Discover why Indian students choose to study in Lithuania."
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlithuania.in/study/#article",
        "headline": "Why Study in Lithuania?",
        "description":
          "Information for students about studying in Lithuania.",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinlithuania.in/study/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlithuania.in/study/faq/#faq",
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
          },
          {
            "@type": "Question",
            "name":
              "Are English-taught programs available in Lithuania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Lithuania offers many English-taught programs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
     <StudyClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
