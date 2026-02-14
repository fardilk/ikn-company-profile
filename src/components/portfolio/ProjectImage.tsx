import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

/**
 * ProjectImage Component - Optimized image with 16:9 aspect ratio
 * Features: Lazy loading, blur placeholder, responsive sizes
 */
export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="mt-6 mb-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      {/* Image container with 16:9 aspect ratio */}
      <div className="relative w-full bg-gray-100" style={{ paddingBottom: '56.25%' }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
      </div>
    </div>
  );
}
