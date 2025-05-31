import Image from "next/image";
import React from "react";
import Form from '@/app/ticket/form'

const page = () => {
  return (
    <div className={`min-h-screen bg-[#1c1f29] text-gray-100 p-6 relative flex flex-col items-center`}>
      <Image
        src="/image/pattern-squiggly-line-bottom-desktop.svg"
        alt="botton-image"
        width={600}
        height={600}
        className="absolute bottom-0 left-0"
      />
      <Image
        src="/image/pattern-squiggly-line-top.svg"
        alt="top-image"
        width={300}
        height={500}
        className="absolute top-12 right-0"
      />
      <div className=" flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <Image
            src="/image/logo-mark.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h1 className="font-bold text-xl">Coding Conf</h1>
        </div>
        
      <Form/>
      </div>

      
    </div>
  );
};

export default page;
