import Link from "next/link";
import { blogs } from "@/public/data/blogs";

export default function Blogs() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">
                {blog.title}
              </h3>

              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 mt-3 inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}