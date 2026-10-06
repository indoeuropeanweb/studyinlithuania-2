import Link from "next/link";
import { blogs } from "@/public/data/blogs";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


export const metadata = {
  title: "Get Study in Lithuania Consultants Blogs For Indian Student",
  description: "Explore study in Lithuania blog for Indian students. Get the latest on visas, scholarships, and top universities. Start your application process Now.",
  keywords: [
      "Lithuania Blog",
      "Study in Lithuania Blog",
      "Study in Lithuania Articles",
      "Lithuania Student Blog",
      "Study Abroad Lithuania",
      "Lithuania Universities",
      "Study in Lithuania for Indian Students",
      "Lithuania Student Visa",
      "Lithuania Scholarships",
      "Lithuania Admission Guide"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/blogs/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.studyinlithuania.in/blogs/",
    title:
      "Get Study in Lithuania Consultants Blogs For Indian Student",
    description:
      "Explore study in Lithuania blog for Indian students. Get the latest on visas, scholarships, and top universities. Start your application process Now.",
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
  ],
};

  return (
    <>
    <Breadcrumb heading="Study in Lithuania Blogs: Expert Guides, Student Resources and Study Abroad Insights" />
    <div className="max-w-6xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-4xl font-aino mt-5">Study in Lithuania Blogs & Student Guides</h2>
      <p className="text-base font-roboto mt-3 mb-10">Explore the latest updates, expert guidance, and student resources about studying in Lithuania. From university admissions and Lithuania student visa processes to scholarships, accommodation, career opportunities, and student life, our blogs are designed to help international students make informed decisions about their <Link className="font-semibold hover:underline" href="https://indoeuropean.in">study abroad consultants</Link>. Stay updated with valuable insights, practical tips, and real experiences to successfully plan your education in Lithuania.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[...blogs].reverse().map((blog) => (
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
      <div className="flex justify-end items-end mt-5">
          <Link href={'/gallery'} className="text-blue-500 font-roboto hover:underline">Check our gallery <FaArrowRightLong className="inline-block"/></Link>
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