import { Link } from 'react-router';
import blogs from "../../content/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 pt-28 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Blogs</h1>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Thumbnail Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 md:h-108 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-white mb-2">{blog.title}</h2>
              <p className="text-white mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
