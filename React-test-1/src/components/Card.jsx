import React from "react";

function Card({ title, image, description }) {
  return (
    <div className="bg-[#b4bccc] rounded-xl p-6 shadow-lg text-center transform transition-transform duration-200 hover:translate-y-[-4px]">
      <img src={image} alt={title} className="w-auto h-auto mx-auto object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
  