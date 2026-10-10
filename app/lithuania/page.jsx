import LithuaniaClient from "./LithuaniaClient";


export const metadata = {
  title: "Get Study in Lithuania Consultant for Student By Our Expert",
  description: "Get expert guidance from a study in Lithuania consultant for university admissions, course selection, and a smooth application process. Contact us today!",
  keywords: [
    "Why Study in Lithuania",
    "Study in Lithuania",
    "Study in Lithuania for Indian Students",
    "Benefits of Studying in Lithuania",
    "Lithuania Universities",
    "Lithuania Education",
    "Lithuania Student Visa",
    "Affordable Study in Europe",
    "Lithuania Scholarships",
    "European Universities",
    "Higher Education in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/lithuania"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Get Study in Lithuania Consultant for Student By Our Expert",
    description:
      "Get expert guidance from a study in Lithuania consultant for university admissions, course selection, and a smooth application process. Contact us today!",
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
      "Get Study in Lithuania Consultant for Student By Our Expert",
    description:
      "Get expert guidance from a study in Lithuania consultant for university admissions, course selection, and a smooth application process. Contact us today!",
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
          "Get Study in Lithuania Consultant for Student By Our Expert",
        "description":
          "Get expert guidance from a study in Lithuania consultant for university admissions, course selection, and a smooth application process. Contact us today!"
      },
            {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinlithuania.in/lithuania/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.studyinlithuania.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Lithuania",
            item: "https://www.studyinlithuania.in/lithuania",
          },
        ],
      },
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
