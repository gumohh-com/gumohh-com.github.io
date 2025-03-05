import Footer from "../components/Footer";
import FounderSection from "../components/FounderSection";
import JourneySection from "../components/JourneySection";
import ContentSection from "../components/Content";

const Home = () => {
  return (
    <>
      <div className="relative h-screen flex justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 z-20 object-cover w-full h-full"
          src="/cover.mp4"
          muted
          autoPlay
          loop
          playsInline // Ensures video plays inline on mobile devices
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-20"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-1/2 text-blue-100">
          <h1 className="text-6xl md:text-5xl font-bold text-center">
            Travelling is fun. Together.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
            Reimagine group travel with us. You imagine the trip and we manage
            everything from planning to execution. It's as simple as that!
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-4 mt-8 justify-center items-center">
            <button className="px-6 py-3 min-w-36 w-40 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition">
              Learn More →
            </button>
            <button className="px-6 py-3 min-w-36 w-40 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition">
              Plan Now →
            </button>
          </div>
        </div>
      </div>

      <ContentSection />

      <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-0.5 w-full"></div>

      <FounderSection />
      <JourneySection />

      <div className="flex flex-col items-center justify-center p-6 bg-black text-white shadow-md">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          Please feel free to reach out to us if you have any questions or want
          to start planning a group trip with us.
        </p>
        <p className="text-center mb-4">Thanks for visiting!</p>
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://instagram.com/gunrohh_official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Instagram: @gunrohh_official
          </a>
          <a
            href="mailto:gunrohh.com@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            Email: gunrohh.com@gmail.com
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-0.5 w-full"></div>

      <Footer />
    </>
  );
};

export default Home;
