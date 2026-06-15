import { blogs } from "@/public/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};   
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    keywords: blog.keywords,

    alternates: {
      canonical: `https://www.studyinlithuania.in/blogs/${slug}`,
    },

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      url: `https://www.studyinlithuania.in/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [blog.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}



export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `https://www.studyinlithuania.in/blogs/${slug}#article`,
      headline: blog.title,
      description: blog.metaDescription,
      image: [blog.image],
      author: {
        "@type": "Organization",
        name: "Study in Lithuania",
      },
      publisher: {
        "@type": "Organization",
        name: "Study in Lithuania",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studyinlithuania.in/logo.png",
        },
      },
      datePublished: blog.date,
      dateModified: blog.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.studyinlithuania.in/blogs/${slug}`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `https://www.studyinlithuania.in/blogs/${slug}#breadcrumb`,
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
          name: "Blogs",
          item: "https://www.studyinlithuania.in/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: blog.title,
          item: `https://www.studyinlithuania.in/blogs/${slug}`,
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

  return (
    <>
    <section className="py-10 px-5">
      <div className="container mx-auto max-w-4xl">

        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl"
          width={720}
          height={540}
        />

        <h1 className="text-4xl font-bold font-aino mt-8">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-2 text-inter">
          {blog.date}
        </p>

      {blog.sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h2
              key={index}
              className="mt-10 text-2xl md:text-3xl font-semibold font-aino text-[#048D4E]"
            >
              {section.content}
            </h2>
          );
        }

        if (section.type === "subheading") {
          return (
            <h3
              key={index}
              className="mt-6 text-xl md:text-2xl font-semibold font-aino"
            >
              {section.content}
            </h3>
          );
        }

        if (section.type === "paragraph") {
          return (
            <p
              key={index}
              className="mt-4 text-justify text-gray-700 leading-8 font-inter"
            >
              {section.content}
            </p>
          );
        }

      if (section.type === "list") {
        return (
          <ul
            key={index}
            className="mt-5 space-y-3 rounded-2xl bg-[#048D4E]/5 p-5"
          >
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-3 text-gray-700 font-inter"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FFB81C]" />

                <span className="leading-7">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      }

      return null;
    })}

        <div className="mt-10">
          <h2 className="mt-10 text-2xl md:text-3xl font-semibold font-aino text-[#048D4E]">
            FAQs
          </h2>

          {blog.faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold font-roboto">
                {faq.question}
              </h3>

              <p className="font-inter text-justify">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
    </>
  );
}