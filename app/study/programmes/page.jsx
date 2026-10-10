import ProgrammeClient from "./ProgrammeClient";

export const metadata = {
  title: "Study Programmes in Lithuania | Bachelor's, Master's & PhD",
  description: "Explore the best study programmes in Lithuania for Indian students. Compare Bachelor's, Master's, and PhD courses, universities, tuition fees, more, Apply Now",
  keywords: [
      "Study Programmes in Lithuania",
      "Lithuania Study Programmes",
      "Bachelor's Programmes in Lithuania",
      "Master's Programmes in Lithuania",
      "PhD Programmes in Lithuania",
      "Courses in Lithuania",
      "Study in Lithuania",
      "Lithuania Universities",
      "Lithuania Courses for International Students",
      "Higher Education in Lithuania",
      "English Taught Programmes in Lithuania"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/study/programmes"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinlithuania.in/study/programmes/",
    siteName: "Study in Lithuania",
    title:
    "Study Programmes in Lithuania | Bachelor's, Master's & PhD",
    description:
    "Explore the best study programmes in Lithuania for Indian students. Compare Bachelor's, Master's, and PhD courses, universities, tuition fees, more, Apply Now",
    images: [
    {
    url: "https://www.studyinlithuania.in/images/study/lithuania-01.webp",
    alt: "Top Universities in Lithuania",
    },
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
            url: "https://www.studyinlithuania.in/",
          },
        },
        {
          "@type": "WebPage",
          "@id":
            "https://www.studyinlithuania.in/study/programmes/#webpage",
          url: "https://www.studyinlithuania.in/study/programmes/",
          name: "Programmes in Lithuania",
          description:
            "Explore Bachelor's, Master's and PhD programmes in Lithuania for international students.",
          isPartOf: {
            "@id": "https://www.studyinlithuania.in/#website",
          },
          breadcrumb: {
            "@id":
              "https://www.studyinlithuania.in/study/programmes/#breadcrumb",
          },
          inLanguage: "en",
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://www.studyinlithuania.in/study/programmes/#breadcrumb",
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Programmes",
              item: "https://www.studyinlithuania.in/study/programmes/",
            },
          ],
        },
      ],
    };
  

  return (
    <>
     <ProgrammeClient />
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }} />
    </>
  )
}

export default page