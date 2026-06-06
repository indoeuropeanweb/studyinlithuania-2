import Link from "next/link";
import { blogs } from "@/public/data/blogs";
import Breadcrumb from "../components/Breadcrumb";

export default function Blogs() {
  return (
    <>
    <Breadcrumb heading="Blogs" />
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl md:text-4xl font-aino mt-5">Study in Lithuania Blogs & Student Guides</h1>
      <p className="text-base font-roboto mt-3 mb-10">Explore the latest updates, expert guidance, and student resources about studying in Lithuania. From university admissions and Lithuania student visa processes to scholarships, accommodation, career opportunities, and student life, our blogs are designed to help international students make informed decisions about their study abroad journey. Stay updated with valuable insights, practical tips, and real experiences to successfully plan your education in Lithuania.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="border rounded-xl overflow-hidden hover:scale-102 duration-500 ease-in-out"
          >
          <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
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
              <p className="font-roboto text-sm md:text-md text-end">{blog.publishDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}