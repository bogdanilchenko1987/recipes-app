export default function SkeletonCard() {
  return (
    <div className="border rounded shadow animate-pulse overflow-hidden">
      <div className="bg-gray-300 h-48 w-full" />
      <div className="p-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );
}
