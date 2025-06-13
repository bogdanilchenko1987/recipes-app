/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface Props {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: Props) {
  if (!recipes.length)
    return <div className=" p-10 text-center">😳 No recipes found</div>;

  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map(({ id, title, image }) => (
        <Link
          key={id}
          href={`/recipes/${id}`}
          className="group relative block overflow-hidden rounded-xl shadow-md border border-green-300 bg-white dark:bg-gray-900 transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="relative overflow-hidden rounded-t-xl h-48">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <h3 className="absolute bottom-2 left-2 right-2 text-white text-center text-lg font-semibold drop-shadow-lg bg-green-700 bg-opacity-70 rounded px-2 py-1 truncate">
              {title}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
}
