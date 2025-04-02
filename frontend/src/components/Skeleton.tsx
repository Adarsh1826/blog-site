export const Skeleton = () => {
    return (
      <div className="border-b pb-6 mb-6 space-y-6 animate-pulse w-full max-w-2xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div> 
          <div className="h-5 bg-gray-300 rounded w-1/3"></div> 
        </div>
  
        <div className="h-6 bg-gray-300 rounded w-5/6"></div> 
  
        {/* Content Skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full"></div> 
          <div className="h-4 bg-gray-300 rounded w-5/6"></div> 
          <div className="h-4 bg-gray-300 rounded w-2/3"></div> 
        </div>
      </div>
    );
  };

