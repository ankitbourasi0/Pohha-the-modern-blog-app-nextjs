import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" w-full flex-col py-8 px-12 flex justify-center items-center   ">
      <h1 className="text-4xl border-b-2 border-slate-600  mb-12 tracking-wide text-center font-semibold pb-4">
        About Us
      </h1>

      <div className=" flex flex-wrap sm:flex-col sm:py-4 lg:py-0 sm:space-y-3 lg:space-y-0 lg:flex-row max-w-8xl bg-zinc-200 -z-20 justify-between items-center w-full ">
        <div className="w-1/2  z-10 dark:bg-white/20 rounded-lg pl-4 backdrop-blur-md lg:max-w-2xl md:max-w-2xl">
          <h1 className="lg:text-8xl sm:text-center  dark:text-zinc-800 text-zinc-800 md:text-6xl sm:text-4xl  font-bold flex flex-wrap   uppercase">
            We Really Love To Share With People
          </h1>
        </div>
        <div className="w-1/2  -z-10">
          <img src="share.jpg" className="" />
        </div>
      </div>

      <div
        className="max-w-8xl  w-full flex flex-col
      justify-center  items-center    rounded-xl   p-16"
      >
        <div className=" flex flex-wrap max-w-7xl ">
          <h3 className="tracking-wide lg:text-2xl md:text-xl sm:text-lg dark:text-white text-gray-800 py-4 px-2 text-center font-poppins">
            Welcome to Pohha.blog, the online platform for bloggers around the
            world. Our goal is to provide a platform for bloggers to share their
            thoughts, opinions, and experiences with a global audience.
          </h3>
        </div>
        <div className="py-4">
          <Image
            unoptimized
            src="/logo2.png"
            className="w-96 rounded-lg border-2 shadow-lg mb-8 h-full"
            width={10}
            height={10}
          />
        </div>
        <div className="flex lg:space-x-6 lg:flex-row sm:flex-col my-8 lg:space-y-0 sm:space-y-4 sm:space-x-0 font-medium text-gray-800 ">
          <div className="shadow-md p-4 border rounded-r-full bg-zinc-800 border-gray-200 text-white ">
            <p>
              At Pohha.blog, we believe that everyone has a story to tell, and
              we want to give people the opportunity to share their stories with
              others. Whether you're an experienced blogger or just starting
              out, we invite you to join our community and share your voice.
            </p>
          </div>
          <div className="shadow-md p-4 border rounded-xl bg-zinc-800 border-gray-200 text-white">
            <p>
              We believe that blogging is a powerful tool for self-expression,
              community building, and social change. Join us at Pohha.blog and
              be a part of this exciting community of bloggers.
            </p>
          </div>
          <div className="shadow-md p-4 border rounded-l-full  bg-zinc-800 border-gray-200 text-white">
            <p className="pl-5">
              Our platform allows you to post your blog articles and read
              articles from other bloggers around the world. We also provide
              tools to help you promote your blog and connect with other
              bloggers in your niche.
            </p>
          </div>
        </div>

        <div className="max-w-7xl py-12 flex sm:flex-col flex-wrap lg:flex-row sm:space-y-6 text-center space-x-8 border-2 rounded-lg  dark:bg-zinc-900 p-5  justify-between items-center">
          <h3 className="max-w-3xl text-2xl font-semibold dark:text-white ">
            Ankit Bourasi is the founder and creator of Pohha.blog, a platform
            for bloggers to share their stories with a global audience. Ankit
            has always been passionate about writing and storytelling, and he
            wanted to create a platform where people from all over the world
            could share their experiences and connect with others.
          </h3>
          <img src="profile.png" width="350px" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
