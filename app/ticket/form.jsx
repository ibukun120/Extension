"use client";
import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const [github, setGithub] = useState("");
  const [getTicket, setGetTicket] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setGetTicket({ name, email, github });
  }
  return (
    <div>
      <h1 className="text-3xl mt-8 font-semibold text-center">
        Your Journey to Coding Conf
        <br />
        2025 Start Here!
      </h1>
      <p className="text-center">
        Secure your spot at next year`s coding conference
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="text-left w-full flex flex-col gap-2"
      >
        <label htmlFor="avatar" className="text-left text-sm">
          Upload Avatar
        </label>
        {/* <input type="text" /> */}
        <div className="py-4 md:px-24 rounded-xl flex items-center flex-col border border-dashed border-white">
          <Image
            src="/image/icon-upload.svg"
            width={40}
            height={40}
            alt="upload icon"
            className="p-2 rounded-lg bg-gray-300"
          />
          <h1 className="text-xs md:text-sm">
            Drag and drop or click to upload
          </h1>
        </div>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="py-1 px-2 rounded-md"
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="mail"
          name="email"
          id="email"
          onChange={(e) => SetEmail(e.target.value)}
          className="py-1 px-2 rounded-md"
          placeholder="example@email.com"
        />

        <label htmlFor="name">GitHub Username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setGithub(e.target.value)}
          className="py-1 px-2 rounded-md"
          placeholder="GitHub Username"
        />

        <button
          type="submit"
          className="bg-orange-700 rounded-lg w-full py-2 text-center px-4 text-gray-900"
        >
          Generate my Ticket
        </button>
      </form>
      {/* form ending */}

      {/* the ticket div */}
      {getTicket && (
        <div className="p-3 bg-slate-100 text-black mt-12 flex flex-col gap-12 text-start rounded-lg">
          <div className="">
            <Image
              src="/image/logo-mark.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-8 h-8 float-left mr-4"
            />

            <div>
              <h1 className="font-bold text-xl">Coding Conf</h1>
              <p>Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div>
            <Image
              src="/image/image-avatar.jpg"
              alt="logo"
              width={40}
              height={40}
              className="w-20 h-20 float-left mr-4 rounded-lg"
            />

            <div>
              {/* Jonathan Kristof */}
              <h1 className="font-semibold">{getTicket.name}</h1>
              <p className="pt-2">
                {" "}
                <span className="pr-3">
                  <Image
                    src="/image/image-avatar.jpg"
                    className="float-left"
                    width={20}
                    height={20}
                    alt="git"
                  />
                </span>{" "}
                {getTicket.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
