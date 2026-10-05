import StudyClient from "./StudyClient";


export const metadata = {
  title: "Why Study in Lithuania: Top Benefits for Indian Students",
  description: "Why Study in Lithuania as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
  keywords: [
      "Why Study in Lithuania",
      "Study in Lithuania",
      "Study in Lithuania for Indian Students",
      "Benefits of Studying in Lithuania",
      "Lithuania Universities",
      "Lithuania Education",
      "Lithuania Study Visa",
      "Affordable Study in Europe",
      "Lithuania Scholarships",
      "Study Abroad Lithuania",
      "Lithuania Admission"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    title:
      "Why Study in Lithuania: Top Benefits for Indian Students",
    description:
      "Why Study in Lithuania as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
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
      "Why Study in Lithuania: Top Benefits for Indian Students",
    description:
      "Why Study in Lithuania as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
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
          name: "Study",
          item: "https://www.studyinlithuania.in/study/",
        },
      ],
    },
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
