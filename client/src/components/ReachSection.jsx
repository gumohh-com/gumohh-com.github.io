import { Link } from "react-router";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Added FaInstagram import
import { IoIosCall } from "react-icons/io";
import { NoHoverPillInvertedButton } from "./CustomButtons";

const ReachSection = () => {
  return (
    <section className="p-8 bg-black">
      {/* <div className="flex flex-col items-center bg-[url('/banner-03.jpg')] bg-cover bg-center min-h-96 rounded-2xl w-full mb-8">
        <h4 className="text-4xl text-blue-50 font-bold p-8 text-center">
          Time to Start Your Journey
        </h4>
        <p className="text-blue-50 text-center max-w-72">
          Embrace the chance to discover diverse landscapes, taste new cuisines,
          and connect with people from different backgrounds.
        </p>
        <div className="bg-black rounded-2xl p-8 m-8 flex justify-around flex-wrap gap-2">
          <div className="max-w-32 text-white font-bold flex flex-wrap text-center">
            Start Your Journey Today!
          </div>
          <div>
            <NormalButton to="/contact">BOOK A TRIP</NormalButton>
          </div>
        </div>
      </div> */}

      <div className="flex  gap-6 flex-wrap justify-center">
        {/* Travel Stories Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-xl p-20 text-center max-w-2xl min-w-80 transform transition-all hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Travel Stories
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you’re a seasoned traveller or planning your next trip,
            these tales are sure to ignite your passion for adventure.
          </p>
          <NoHoverPillInvertedButton to="/stories">Read Here</NoHoverPillInvertedButton>
        </div>

        {/* Contact Support Card */}
        <div className="bg-gradient-to-br from-violet-50 to-cyan-50 rounded-xl shadow-xl p-20 text-center max-w-2xl min-w-80 transform transition-all hover:scale-105 hover:shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-violet-800">
            Contact Support
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions, feel free to contact our support team, and we
            will get back to you within 24 hours.
          </p>
          <a
            href="mailto:gumohh.com@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 min-w-64"
          >
            gumohh.com@gmail.com
          </a>
          <p
            href="mailto:gumohh.com@gmail.com"
            className="flex justify-around items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 min-w-64 mt-2"
          >
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/917849900893?text=I'm%20interested%20in%20a%20trip"
            >
              <FaWhatsapp />
            </a>
            <p>+91 78499 00893</p>
            <a href="tel:+91-784-990-0893">
              <IoIosCall />
            </a>
          </p>


        </div>

        {/* Social Media Card */}
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl shadow-xl p-20 text-center max-w-2xl min-w-80 transform transition-all hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-pink-800">
            Follow Us on Social Media
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We post regular updates and sneak peeks into our onging trips on our social media channels. Stay connected with us through the channels below.
          </p>
          <a
            href="https://www.instagram.com/gumohh_traveltech/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full inline-block hover:from-pink-600 hover:to-red-700 transition-all transform hover:scale-105 min-w-64"
          >
            <FaInstagram className="inline-block mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;
