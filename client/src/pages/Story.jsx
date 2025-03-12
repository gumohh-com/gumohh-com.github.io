import { useParams, Link } from 'react-router';
import stories from "../../content/stories";  

const Story = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <div className="text-center text-red-500">Story not found!</div>;
  }

  return (
    <div className="min-h-screen bg-black md:pt-24">
      {/* Banner Image */}
      <div className="w-full h-64 sm:h-96 overflow-hidden flex justify-center items-center">
        <img
          src={story.image}
          alt={story.title}
          className="w-2xl "
        />
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">{story.title}</h1>
        <p className="text-white mb-8">{story.description}</p>
        <div className="prose prose-lg text-white">
          <p>{story.content}</p>
        </div>
        <Link
          to="/stories"
          className="inline-block mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Stories
        </Link>
      </div>
    </div>
  );
};

export default Story;