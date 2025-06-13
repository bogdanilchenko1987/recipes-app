"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("❌ Error in /recipes/[id]:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        {" "}
        Ooops, we have a problem 🧨
      </h2>
      <p className="mb-6 text-gray-700 max-w-md">Try again later!</p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
