import Image from "next/image";
// import React from "react";

const Rough = () => {
  return (
    <div>
      <div className="gap-4">
        <div>
          <Image
            src={informations.url}
            alt="profile phote"
            width={50}
            height={50}
            className="bg-red-300 rounded-full w-9 h-9"
          />
        </div>

        <p className="space-x-2">
          <span className="font-bold">{informations.name}</span>
          <span className="text-gray-600">{informations.reaction}</span>
          <span className="font-semibold text-gray-700">
            {informations.reaction}
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
          </span>
        </p>
      </div>

      {/* second */}

      <div className="hidden md:flex items-center gap-4">
        <div>
          <Image
            src={informations.url}
            alt="profile phote"
            width={50}
            height={50}
            className="bg-red-300 rounded-full w-9 h-9"
          />
        </div>

        <div className="flex gap-3 items-start">
          <div>
            <h1 className="font-bold">{informations.name}</h1>
            <p className="text-sm text-gray-500">{informations.time}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-600">{informations.action}</p>
            <span className="font-semibold text-gray-700">
              {informations.reaction}
            </span>
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 pl-9 block">{informations.time}</p>
    </div>
  );
};

export default Rough;
