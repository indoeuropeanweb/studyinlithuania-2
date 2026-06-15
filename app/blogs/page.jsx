import Link from "next/link";
import { blogs } from "@/public/data/blogs";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";


export const metadata = {
  title: "Study in Lithuania Blogs | Student Guides, Visa Tips, Universities & Scholarships",
  description: "Explore expert blogs on studying in Lithuania. Get insights on universities, admissions, visas, scholarships, student life, accommodation, and career opportunities for Indian students.",
  keywords: ["Study in Lithuania Blogs", "Lithuania Student Blog", "Study in Lithuania Guide", "Lithuania Universities Blog", "Lithuania Admission Guide", "Lithuania Student Visa Blog", "Lithuania Scholarships Blog", "Lithuania Student Life", "Study Abroad Lithuania", "Lithuania Living Costs", "Lithuania Accommodation Guide", "Lithuania Work Opportunities", "Lithuania Career Guide", "Lithuania Education Blog", "International Students Lithuania", "Lithuania Application Process", "Lithuania Universities", "Indian Students Lithuania", "Lithuania Study Tips", "Study in Europe Blog"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/blogs"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/blogs/",
    title:
      "Study in Lithuania Blogs | Student Guides, Visa Tips & University Updates",
    description:
      "Read expert blogs on Lithuanian universities, admissions, scholarships, visas, accommodation, student life and career opportunities.",
    siteName: "Study in Lithuania",
    locale: "en_US",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Lithuania Blog for International Students",
      },
    ],
  },
}

export default function Blogs() {


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
      "@type": "Blog",
      "@id": "https://www.studyinlithuania.in/blogs/#blog",
      url: "https://www.studyinlithuania.in/blogs/",
      name: "Study in Lithuania Blog",
      description:
        "Educational resources, admission guides, scholarship updates, visa information, student life tips and university insights for international students planning to study in Lithuania.",
      publisher: {
        "@id": "https://www.studyinlithuania.in/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlithuania.in/blogs/#webpage",
      url: "https://www.studyinlithuania.in/blogs/",
      name: "Study in Lithuania Blog",
      description:
        "Explore blogs about Lithuanian universities, admissions, scholarships, visas, accommodation, living costs and student life.",
      isPartOf: {
        "@id": "https://www.studyinlithuania.in/#website",
      },
      breadcrumb: {
        "@id": "https://www.studyinlithuania.in/blogs/#breadcrumb",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.studyinlithuania.in/blogs/#collectionpage",
      url: "https://www.studyinlithuania.in/blogs/",
      name: "Study in Lithuania Blogs",
      description:
        "Collection of blog articles and study guides for international students.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/blogs/#breadcrumb",
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
          name: "Blogs",
          item: "https://www.studyinlithuania.in/blogs/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What topics are covered in the Study in Lithuania Blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The blog covers universities, admissions, scholarships, visas, accommodation, student life, living costs, work opportunities and study abroad guidance.",
          },
        },
        {
          "@type": "Question",
          name: "Are these blogs useful for Indian students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the blogs are designed to help Indian students understand the admission process, visa requirements, scholarships and life in Lithuania.",
          },
        },
        {
          "@type": "Question",
          name: "Can I find scholarship and visa updates on this blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the blog regularly publishes information about scholarships, university deadlines, admissions and visa procedures.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.studyinlithuania.in/blogs/#image",
      contentUrl:
        "https://www.studyinlithuania.in/wp-content/uploads/study-in-lithuania-blog.jpg",
      caption: "Study in Lithuania Blog for International Students",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
    <Breadcrumb heading="Our Blogs" />
    <div className="max-w-6xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-4xl font-aino mt-5">Study in Lithuania Blogs & Student Guides</h2>
      <p className="text-base font-roboto mt-3 mb-10">Explore the latest updates, expert guidance, and student resources about studying in Lithuania. From university admissions and Lithuania student visa processes to scholarships, accommodation, career opportunities, and student life, our blogs are designed to help international students make informed decisions about their study abroad journey. Stay updated with valuable insights, practical tips, and real experiences to successfully plan your education in Lithuania.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="border rounded-xl overflow-hidden hover:scale-102 duration-500 ease-in-out"
          >
          <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
              width={480}
              height={320}
          />
          <div className="p-4">
            <h3 className="font-semibold font-aino text-base md:text-xl">
              {blog.title}
            </h3>

              <div
                // href={`/blogs/${blog.slug}`}
                className="text-blue-600 mt-5 inline-block hover:underline"
              >
                Read More →
              </div>
              {/* <p className="font-roboto text-sm md:text-md text-end">{blog.publishDate}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}