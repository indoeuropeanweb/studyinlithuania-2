import { blogs } from "@/public/data/blogs";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  
        const {slug} = await params;

        const blog = blogs.find(
            (item) => item.slug === slug
        );

        if (!blog) {
            notFound();
        }


  return (
    <section className="py-10">
      <div className="container mx-auto max-w-4xl">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl"
        />

        <h1 className="text-4xl font-bold font-aino mt-8">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-2 text-inter">
          {blog.date}
        </p>

        {blog.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-bold font-aino">
              {section.heading}
            </h2>

            <p className="mt-3 text-justify font-inter">
              {section.content}
            </p>
          </div>
        ))}

        <div className="mt-10">
          <h2 className="text-2xl font-bold">
            FAQs
          </h2>

          {blog.faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold font-roboto">
                {faq.question}
              </h3>

              <p className="font-inter text-justify">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}