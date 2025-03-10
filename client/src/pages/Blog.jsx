import { useParams, Link } from 'react-router';
import blogs from "../../content/blogs";  

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found!</div>;
  }

  return (
    <div className="min-h-screen bg-black md:pt-24">
      {/* Banner Image */}
      <div className="w-full h-64 sm:h-96 overflow-hidden flex justify-center items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-2xl "
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>
        <p className="text-white mb-8">{blog.description}</p>
        <div className="prose prose-lg text-white">
          <p>{blog.content}</p>
        </div>
        <Link
          to="/blogs"
          className="inline-block mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blog;