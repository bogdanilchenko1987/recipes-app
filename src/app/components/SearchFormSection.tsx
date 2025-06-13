"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchFormSection() {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxTime, setMaxTime] = useState("");

  const router = useRouter();
  const isFormFilled = query || cuisine || maxTime;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = new URLSearchParams();
    if (query) searchParams.set("query", query);
    if (cuisine) searchParams.set("cuisine", cuisine);
    if (maxTime) searchParams.set("maxReadyTime", maxTime);

    router.push(`/recipes?${searchParams.toString()}`);
  };

  return (
    <section id="recipes" className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Find Your Recipe
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Search Query</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. pasta"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Cuisine</label>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Thai">Thai</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Max Preparation Time (minutes)
            </label>
            <input
              type="number"
              value={maxTime}
              onChange={(e) => setMaxTime(e.target.value)}
              min="0"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={handleNext}
              disabled={!isFormFilled}
              className={`w-full bg-green-700 text-white py-2 rounded transition hover:bg-green-800 ${
                !isFormFilled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
