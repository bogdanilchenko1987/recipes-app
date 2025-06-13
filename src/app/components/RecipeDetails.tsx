import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

import Button from "./Button";

interface Ingredient {
  id: number;
  original: string;
}

interface Props {
  title: string;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  ingredients: Ingredient[];

  sourceUrl?: string;
}

export default function RecipeDetails({
  title,
  image,
  readyInMinutes,
  servings,
  summary,
  ingredients,

  sourceUrl,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl text-center font-bold">{title}</h1>

      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="rounded-lg w-full object-cover"
        />
      )}

      <div className="flex gap-6 text-gray-600 text-sm">
        {readyInMinutes !== undefined && <span>⏱ {readyInMinutes} min</span>}
        {servings !== undefined && <span>🍽 {servings} servings</span>}
      </div>

      {summary && (
        <div
          className="prose prose-sm max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(summary) }}
        />
      )}

      <div>
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ing, index) => (
            <li key={`${ing.id}-${index}`}>{ing.original}</li>
          ))}
        </ul>
      </div>

      {sourceUrl && (
        <p className="mt-4">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View original recipe ↗
          </a>
        </p>
      )}

      <div className="mt-8 text-center">
        <Button href="/" label="Go Back" />
      </div>
    </div>
  );
}
