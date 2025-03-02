import React from 'react';

const Gallery = () => {
  const images = Array.from({ length: 8 }, (_, i) => `/g${i + 1}.jpeg`);

  return (
    <div className="bg-black p-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-20">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-2xl shadow-md">
          <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
