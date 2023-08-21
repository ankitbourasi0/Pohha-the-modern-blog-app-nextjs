import React from "react";
import Image from "next/image";
const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 lg:p-12 px-7 py-8  relative bg-white border dark:bg-zinc-900 dark:border-gray-700 shadow-lg rounded-lg   ">
      <div className="mb-4  flex w-full lg:justify-start justify-center ">
        <Image
          alt={author.name}
          unoptimized
          height={75}
          width={75}
          className="align-middle  rounded-full "
          src={author.photo.url}
        />
      </div>
      <div className="lg:text-left text-current space-y-1 self-center">
        <h3 className="   text-xl font-bold">{author.name}</h3>
        <p className=" text-lg">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
