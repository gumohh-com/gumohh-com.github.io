import React from "react";

const Gallery = () => {
  const images = Array.from({ length: 9 }, (_, i) => `/g${i + 1}.jpeg`);

  return (
    <div className="bg-black p-6 gap-6 pt-25 flex flex-wrap justify-center">
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
  );
};

export default Gallery;
