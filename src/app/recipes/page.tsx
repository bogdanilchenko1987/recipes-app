import React, { Suspense } from "react";
import RecipeList from "../components/RecipeList";
import RecipeListSkeleton from "../components/SkeletonRecipeList";
import Button from "../components/Button";

export const metadata = {
  title: "Reci.App | All Recipes we can find",
  description:
    "Browse healthy and delicious recipes from around the world. Filter by cuisine, prep time, and more.",
};

interface RecipesPageProps {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
}

async function fetchRecipes(
  query?: string,
  cuisine?: string,
  maxReadyTime?: string
) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
  if (query) url.searchParams.append("query", query);
  if (cuisine) url.searchParams.append("cuisine", cuisine);
  if (maxReadyTime) url.searchParams.append("maxReadyTime", maxReadyTime);
  url.searchParams.append("apiKey", apiKey!);

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch recipes");

  return res.json();
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { query = "", cuisine = "", maxReadyTime = "" } = await searchParams;
  const recipesData = await fetchRecipes(query, cuisine, maxReadyTime);

  return (
    <main className="min-h-screen p-4">
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList recipes={recipesData.results} />
      </Suspense>
      <div className="mt-8 text-center">
        <Button href="/" label="Go Back" />
      </div>
    </main>
  );
}
