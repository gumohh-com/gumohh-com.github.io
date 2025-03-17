import React, { useState, useEffect } from "react";
import { NoHoverPillNormalButton } from "./CustomButtons";

const destinations = [
  "Shimla",
  "Manali",
  "Amritsar",
  "Agra",
  "Nainital",
  "Dharamshala",
  "Kullu",
  "Ranthambore",
  "Haridwar",
  "Srinagar",
  "Tawang",
  "Mcleodganj",
  "Khajjiar",
  "Almora",
  "Mussoorie",
  "Jaipur",
  "Goa",
  "Kerala",
  "Varanasi",
  "Rishikesh",
  "Andaman Islands",
  "Leh-Ladakh",
  "Mysore",
  "Darjeeling",
  "Hampi",
];

const ContentSection = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % destinations.length;
      setCurrentDestination(destinations[index]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[50vh] bg-black flex justify-center items-center">
      <div className="text-center mt-0 p-0">
        <h5 className="text-white text-4xl font-semibold drop-shadow-md">
          Welcome To India
        </h5>
        <h1 className="text-white text-5xl font-semibold drop-shadow-md mt-2">
          Visit{" "}
          <span className="text-pink-500 drop-shadow-md text-6xl">
            {currentDestination}
          </span>
        </h1>
        <p className="text-white font-semibold mt-2 mb-8 text-xl">
          See the world with open eyes
        </p>

        <NoHoverPillNormalButton to="/contact">
          Book a place now!
        </NoHoverPillNormalButton>
      </div>
    </div>
  );
};

export default ContentSection;
