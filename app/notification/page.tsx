import React from "react";
import NotificationUi from "./NotificationUi";
// import infos from '@/app/notification/data.js'

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-5 md:py-12">
      <div className="w-full md:w-1/2 bg-white p-4 md:mx-auto rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-2xl text-blue-950 font-bold">
            Notifications{" "}
            <span className="text-sm py-1 px-3 rounded-lg text-white bg-blue-950 ">
              3
            </span>
          </h1>
          <button 
          
          className="text-gray-700 hover:text-gray-900">
            Mark all as Read
          </button>
        </div>


        <div>
          <NotificationUi/>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
