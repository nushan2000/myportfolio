import React from "react";

const SkillCard = ({ imgUrl, title, description, icons }) => {
  return (
    <div className="flex flex-col bg-[#181818]  h-full">
      <div
        className="h-42 md:h-42 rounded-t-xl  relative group flex justify-center items-center"
        style={{ backgroundSize: "cover" }}
      >
        <ul className="list-none flex flex-wrap justify-center">
          {icons.map((icon, index) => (
            <li key={index} className="inline-block m-2">
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <img
                  src={icon.url}
                  alt={icon.name}
                  className="h-6 w-6 mr-1"
                />
                <span className="text-white">{icon.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4 flex-grow">
        <h5 className="text-xl  mb-2">{title}</h5>
      </div>
    </div>
  );
};

export default SkillCard;
