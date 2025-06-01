'use client'

import Image from "next/image";

const NotificationUi = () => {
  const infos = [
    {
      name: "Mark Vebber",
      url: "/image/avatar-mark-webber.webp",
      action: "reacted to your recent post",
      reaction: "My first tournament today!",
      time: "1m ago",
      isNew: true,
    },
    {
      name: "Angela Gray",
      url: "/image/avatar-angela-gray.webp",
      action: "Followed you",
      reaction: "",
      time: "5m ago",
      isNew: true,
    },
    {
      name: "Jacob Thompson",
      url: "/image/avatar-jacob-thompson.webp",
      action: "has joined your group",
      reaction: "Chess Club",
      time: "1 day ago",
      isNew: true,
    },
    {
      name: "Rizky Hasanuddin",
      url: "/image/avatar-rizky-hasanuddin.webp",
      action: "sent you a private message",
      reaction: "",
      time: "5 days ago",
      isNew: false,
    },
    {
      name: "Kimberly Smith",
      url: "/image/avatar-kimberly-smith.webp",
      action: "commented on your picture",
      reaction: "",
      time: "1 week ago",
      isNew: false,
    },
    {
      name: "Nathan Peterson",
      url: "/image/avatar-nathan-peterson.webp",
      action: "reacted to your recent post",
      reaction: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      isNew: false,
    },
    {
      name: "Anna Kim",
      url: "/image/avatar-anna-kim.webp",
      action: "left the the group",
      reaction: "Chesse Club",
      time: "2 weeks ago",
      isNew: false,
    },
  ];


  return (
    <section className="mt-6">
      {infos.map((informations) => {
        return (
          <div className={informations.isNew ? "gap-4 p-2 bg-blue-50 rounded-lg" : "gap-4 p-2 bg-white rounded-lg"}>
            <div className="flex gap-4 space-y-3">
              <div>
                <Image
                  src={informations.url}
                  alt="profile phote"
                  width={50}
                  height={50}
                  className="bg-red-300 rounded-full w-9 h-9"
                />
              </div>

              <p className="space-x-2 text-wrap">
                <span className="font-bold">{informations.name}</span>
                <span className="text-gray-600">{informations.reaction}</span>
                <span className="font-semibold text-gray-700">
                  {informations.action}
                  <span className="h-2 w-2 bg-red-600 rounded-full"></span>
                </span>
              </p>
            </div>
            
          </div>
        );
      })}
    </section>
  );
};

export default NotificationUi;
