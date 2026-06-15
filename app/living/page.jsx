import LivingClient from "./LivingClient";


export const metadata = {
  title: "Living in Lithuania as an Indian Student | Cost, Accommodation & Lifestyle",
  description: "Learn about student life in Lithuania, including living costs, accommodation, transportation, healthcare, safety, culture, food, and daily expenses for Indian and international students",
  keywords: ["living in Lithuania", "student life in Lithuania", "cost of living in Lithuania", "accommodation in Lithuania", "Lithuania student housing", "Lithuania lifestyle", "study in Lithuania", "living expenses in Lithuania", "Indian students in Lithuania", "international students Lithuania"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    title:
      "Living in Lithuania as an International Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Lithuania including accommodation, living expenses, transportation, healthcare, safety, culture and lifestyle for international students.",
    url: "https://www.studyinlithuania.in/living/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/living.webp",
        width: 1200,
        height: 630,
        alt: "Living in Lithuania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Living in Lithuania as an International Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Lithuania including accommodation and lifestyle.",
    images: [
      "https://www.studyinlithuania.in/images/living/living.webp",
    ],
  },
}

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
        "@type": "WebSite",
        "@id": "https://www.studyinlithuania.in/",
        "url": "https://www.studyinlithuania.in/",
        "name": "Study in Lithuania"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/living/",
        "url": "https://www.studyinlithuania.in/living/",
        "name":
          "Living in Lithuania as an International Student",
        "description":
          "Learn about student life in Lithuania, including living costs, accommodation, transportation, healthcare, safety, culture and lifestyle.",
        "isPartOf": {
          "@id": "https://www.studyinlithuania.in/"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlithuania.in/living/#article",
        "headline":
          "Living in Lithuania as an International Student",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinlithuania.in/living/"
        },
        "publisher": {
          "@id":
            "https://www.studyinlithuania.in/"
        },
        "author": {
          "@id":
            "https://www.studyinlithuania.in/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlithuania.in/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What is the cost of living in Lithuania for students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Lithuania is considered one of the more affordable European countries for international students."
            }
          },
          {
            "@type": "Question",
            "name":
              "Is Lithuania safe for international students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Lithuania is generally regarded as a safe and welcoming country."
            }
          }
        ]
      }
    ]
  };

export default function Home() {
  return (
    <>
     <LivingClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
