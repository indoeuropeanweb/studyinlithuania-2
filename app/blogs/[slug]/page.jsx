import { blogs } from "@/public/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }) {

  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
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
              className="mt-6 text-xl md:text-2xl font-semibold font-aino text-[#BE3A34]"
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
          <h2 className="text-2xl font-bold">
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
  );
}