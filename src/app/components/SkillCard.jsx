import React from "react";

const SkillCard = ({ title, description, icons }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap justify-center gap-4">
      {icons.map((icon, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img
            src={icon.url}
            alt={icon.name}
            className="w-10 h-10 mb-1 rounded-lg border border-gray-200 bg-gray-50 p-1 hover:scale-110 transition-transform"
            title={icon.name}
          />
          <span className="text-xs text-gray-500">{icon.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;