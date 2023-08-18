import React from "react";
import moment from "moment";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <>
      <div className="py-2">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:bg-zinc-700 dark:hover:border-gray-700 bg-opacity-90 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
            <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="sm:p-2 sm:pl-0 sm:w-4/6">
              <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
              <Link href={`/post/${post.slug}`}>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {post.title}
                </h3>
              </Link>

              <p className="my-6 text-gray-600 dark:text-gray-300 line-clamp-3  ">
                {post.excerpt}
              </p>

              {/* <div className="flex gap-4">
                <a
                  href="#"
                  className="px-3 py-1 rounded-full border border-gray-100 text-sm font-semibold transition duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  Tailwindcss
                </a>
                <a
                  href="#"
                  className="px-3 py-1 rounded-full border border-gray-100 text-sm font-semibold  transition duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  VueJS
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
 