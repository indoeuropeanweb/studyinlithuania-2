import LivingClient from "./LivingClient";


export const metadata = {
  title: "Get Expert Help for Indian Student Accommodation in Lithuania",
  description: "Get a guide to student accommodation in Lithuania. Explore affordable rooms and university dorms and more. Learn about costs for living there. Contact Us Now",
  keywords: [
      "Student Accommodation in Lithuania",
      "Accommodation in Lithuania for Students",
      "Student Housing in Lithuania",
      "University Dormitories in Lithuania",
      "Affordable Student Accommodation Lithuania",
      "Lithuania Student Hostel",
      "Private Accommodation in Lithuania",
      "Shared Apartments in Lithuania",
      "Living in Lithuania for Indian Students",
      "Study in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    title:
      "Get Expert Help for Indian Student Accommodation in Lithuania",
    description:
      "Get a guide to student accommodation in Lithuania. Explore affordable rooms and university dorms and more. Learn about costs for living there. Contact Us Now",
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
      "Get Expert Help for Indian Student Accommodation in Lithuania",
    description:
      "Get a guide to student accommodation in Lithuania. Explore affordable rooms and university dorms and more. Learn about costs for living there. Contact Us Now",
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
      "@type": "BreadcrumbList",
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
          name: "living",
          item: "https://www.studyinlithuania.in/living/",
        },
      ],
    },
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
