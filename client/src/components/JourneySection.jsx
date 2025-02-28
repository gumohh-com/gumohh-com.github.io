const JourneySection = () => {
  return (
    <section className="p-16">
        <div className="flex flex-col items-center bg-[url('/banner-03.jpg')] bg-cover bg-center min-h-96 rounded-2xl">
            <h4 className="text-4xl text-blue-50 font-bold p-8 text-center">Time to Start Your Journey</h4>
            <p className="text-blue-50 text-center max-w-72">Embrace the chance to discover diverse landscapes, taste new cuisines, and connect with people from different backgrounds.</p>
            <div className="bg-white rounded-2xl p-8 m-8 flex flex-wrap">
                <div className="max-w-32">Start Your Journey Today!</div>
                <div><button className="p-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                    Start your journey today!
                </button>
                </div>
            </div> 
        </div>
        <div className="flex justify-around p-8 bg-gray-50">
      {/* Contact Support Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 text-center w-1/2 mx-4 transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Support</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you have any questions, feel free to contact our support, and we will get back to you within 24 hours.
        </p>
        <a
          href="mailto:gumohh.com@gmail.com"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          gumohh.com@gmail.com
        </a>
      </div>

      {/* Travel Stories Card */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl shadow-xl p-8 text-center w-1/2 mx-4 transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Travel Stories</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Whether you’re a seasoned traveler or planning your next trip, these tales are sure to ignite your passion for adventure.
        </p>
        <button className="bg-gradient-to-r from-gray-500 to-gray-500 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-yellow-600 transition-all transform hover:scale-105">
          Read 👍
        </button>
      </div>
    </div>
      
    </section>
  );
};

export default JourneySection;