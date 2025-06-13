export default function RecipeDetailsSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-4 animate-pulse">
      <div className="h-10 bg-gray-300 rounded w-1/2 mb-6" />
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4" />
      <ul className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="h-4 bg-gray-300 rounded w-full" />
        ))}
      </ul>
    </div>
  );
}
