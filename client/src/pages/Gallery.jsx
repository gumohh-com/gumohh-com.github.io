import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import GradientDivider from "../components/OtherElements"; // Import the custom divider

const Gallery = () => {
  const images = Array.from({ length: 9 }, (_, i) => `/g${i + 1}.jpeg`);

  return (
    <div className="bg-black gap-6 pt-30 pb-10 flex flex-wrap justify-center w-full"> {/* Adjusted padding-top and width */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        transitionTime={500}
        className="w-full max-w-4xl"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-20 h-full bg-black bg-opacity-50 text-white text-5xl z-10"
            >
              ‹
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-20 h-full bg-black bg-opacity-50 text-white text-5xl z-10"
            >
              ›
            </button>
          )
        }
      >
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[80vh] object-contain" // Increased height
            />
          </div>
        ))}
      </Carousel>
      
      <GradientDivider /> {/* Added custom divider */}

      <div className="w-full flex flex-wrap justify-center gap-6 p-10"> {/* New sub div for images */}
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md max-w-80"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-70 h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
