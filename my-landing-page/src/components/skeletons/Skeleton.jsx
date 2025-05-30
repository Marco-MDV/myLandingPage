export default function SkeletonCard() {
  return (
    <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow animate-pulse">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
        <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M3 3l18 18" />
        </svg>
      </div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
}

