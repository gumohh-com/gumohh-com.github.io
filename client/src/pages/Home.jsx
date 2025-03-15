import FounderSection from "../components/FounderSection";
import JourneySection from "../components/ReachSection";
import ContentSection from "../components/Content";
import { NoHoverNormalButton, NoHoverInvertedButton } from "../components/CustomButtons";
import ReachSection from "../components/ReachSection";
import GradientDivider from "../components/OtherElements";

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
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-1/2 text-blue-100 mt-14">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Travelling is fun. Together.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl min-w-64">
            Reimagine group travel with us. You imagine the trip and we manage
            everything from planning to execution. It's as simple as that!
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-4 mt-8 justify-center items-center">
            <NoHoverNormalButton to="/stories">Learn More</NoHoverNormalButton>
            <NoHoverInvertedButton to="/contact">Plan Now</NoHoverInvertedButton>
          </div>
        </div>
      </div>

      <GradientDivider />

      <ContentSection />

      <GradientDivider />

      {/* <FounderSection /> */}
      <ReachSection />

      {/* <div className="flex flex-col items-center justify-center p-6 bg-black text-white shadow-md">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          Please feel free to reach out to us if you have any questions or want
          to start planning a group trip with us.
        </p>
        <p className="text-center mb-4">Thanks for visiting!</p>
        <div className="flex flex-col items-center space-y-2">
          <NormalButton to="https://www.instagram.com/gumohh.comm/" target="_blank" rel="noopener noreferrer">
            Instagram: @gumohh.comm
          </NormalButton>
          <NormalButton to="mailto:gumohh.com@gmail.com">
            Email: gumohh.com@gmail.com
          </NormalButton>
        </div>
      </div> */}
      
    </>
  );
};

export default Home;
