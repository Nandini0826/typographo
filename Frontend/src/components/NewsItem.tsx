import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="w-full bg-[#061039] shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
      <img src={src} className="w-full h-48 object-cover" alt="..." />
      <div className="p-4 bg-[#061039]">
        <h5 className="font-bold text-[#E1F0F5] text-lg mb-2">{title}</h5>
        <p className="text-[#E1F0F5] text-base mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default NewsItem;
