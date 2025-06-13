import React, { Suspense } from "react";
import RecipeDetails from "../../components/RecipeDetails";
import RecipeDetailsSkeleton from "../../components/SkeletonRecipeDetails";
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

async function fetchRecipe(id: string) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch recipe details");

  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const recipe = await fetchRecipe(id);

  return {
    title: `Reci.App | ${recipe.title}`,
    description:
      recipe.summary?.replace(/<[^>]+>/g, "").slice(0, 150) || "Recipe details",
    openGraph: {
      title: recipe.title,
      description: recipe.summary?.replace(/<[^>]+>/g, "").slice(0, 200),
      images: recipe.image ? [recipe.image] : [],
    },
  };
}

export default async function RecipeDetailsPage({ params }: Props) {
  const { id } = params;
  const recipe = await fetchRecipe(id);

  return (
    <Suspense fallback={<RecipeDetailsSkeleton />}>
      <RecipeDetails
        title={recipe.title}
        image={recipe.image}
        readyInMinutes={recipe.readyInMinutes}
        servings={recipe.servings}
        summary={recipe.summary}
        ingredients={recipe.extendedIngredients}
        sourceUrl={recipe.sourceUrl}
      />
    </Suspense>
  );
}
