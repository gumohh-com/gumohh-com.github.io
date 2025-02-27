import FounderSection from "../components/FounderSection";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
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
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Travelling is fun. Together.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
            Reimagine group travel with us. You imagine the trip and we manage
            everything from planning to execution. It's as simple as that!
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition">
              Learn More →
            </button>
            <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition">
              Plan Now →
            </button>
          </div>
        </div>
      </div>
      <FounderSection />
    </>
  )
};

export default Home;
