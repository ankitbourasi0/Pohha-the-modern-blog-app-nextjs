import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white border dark:bg-zinc-900 dark:border-gray-700 shadow-lg rounded-lg px-6 py-6 mb-6 pb-4">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
