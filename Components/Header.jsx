import Link from "next/link";
import { getCategories } from "../services";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// const categories = [{ name: "React", slug: "react" },
// {name:'Web Development',slug:"web-dev"}];

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);

  return (
    <div className="container  mx-auto px-10 mb-0 w-full ">
      <div className=" w-full  flex justify-between border-gray-400 py-8 ">
       
        <div className="md:hidden">
        <Link href="/" className="px-4">
            <span className="cursor-pointer font-bold text-4xl  font-love">
              Pohha
            </span>
          </Link>
        </div>


        <div className="md:contents hidden ">
        <Link href="/" className="px-4">
            <span className="cursor-pointer font-bold text-4xl  font-love">
              Pohha
            </span>
          </Link>
        </div>


        <div className="hidden space-x-10   md:flex">
        <Link href={`/`}>
            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
              Home
            </span>
          </Link>
         
          <Link href={`/aboutus`}>
            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
              About
            </span>
          </Link>
          <Link href={`/contactus`}>
            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
              Contact
            </span>
          </Link>
          
          <Link href={`/privacypolicy`}>
            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </Link>
       
        </div>

        <div className="  md:contents  ">
        {/* DarkMode Button ------------------------------------------------------------------------- */}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 md:float-right  bg-zinc-200 rounded-lg dark:bg-zinc-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all "
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <>
              {resolvedTheme === "dark" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </>
              )}
            </>
          )}
        </button>
        {/* ----------------------------------------------------------------------------- */}

        </div>
     
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((cat) => ( 
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
                {cat.name}
              </span>
            </Link>
          ))} 
        
        </div> */}
      </div>
     
    </div>
  );
};

export default Header;
