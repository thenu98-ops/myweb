import React from 'react';

export function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 👇 Full image shown completely */}
      <img
        src="banner.jpg"
        alt="Thenura Achievements"
        className="w-full"
      />

      {/* 👇 Blue-toned semi-transparent overlay for lower brightness */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-indigo-800/50 mix-blend-multiply"></div>

      {/* 👇 Optional centered content like a title */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Example text if needed:
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md text-center">
          I AM THENURA!
        </h2> */}
      </div>
    </div>
  );
}
