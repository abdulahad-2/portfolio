// components/HackathonEntry.tsx
import React from 'react';

interface HackathonEntryProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  imageSrc?: string; // Optional project image source
  trophyType: 'first' | 'second' | 'third' | 'special' | 'participant' | string; // Specify trophy type
}

// Mapping of trophy types to image paths
// **IMPORTANT:** Replace these placeholder paths with your actual PNG file paths
const trophyImagePaths: Record<string, string> = {
  first: '/trophies/gold_trophy.png', // <-- Replace with actual paths relative to your public directory
  second: '/trophies/silver_trophy.png', // <-- Replace with actual paths
  third: '/trophies/bronze_trophy.png', // <-- Replace with actual paths
  special: '/trophies/special_trophy.png', // <-- Replace with actual paths
  participant: '/trophies/participant_trophy.png', // <-- Replace with actual paths
  // Add more mappings here if you have different trophy types
};

const HackathonEntry: React.FC<HackathonEntryProps> = ({
  entryNumber,
  title,
  award,
  description,
  imageSrc,
  trophyType,
}) => {
  // Get the correct image path based on trophyType from the mapping
  // Fallback to a default image or null if the type is not found
  const trophyImagePath = trophyImagePaths[trophyType]; // Removed fallback for clarity, add back if needed

  return (
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-10 last:border-b-0">
      {/* Entry Number - Displays the sequential number for the hackathon entry */}
      <div className="text-white text-6xl font-extrabold mr-8 mb-4 md:mb-0 flex-shrink-0">
        {entryNumber}
      </div>

      {/* Content Area - Contains the project image and the text details */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Image Placeholder for the Project Image - Displays the project image or a placeholder */}
        <div className="w-full md:w-1/3 aspect-video flex items-center justify-center rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          {imageSrc ? (
            // Render the project image using object-contain to prevent cropping
            <img
              src={imageSrc}
              alt={`Project for ${title}`}
              className="object-contain h-full rounded-sm" // Changed from object-cover to object-contain
            />
          ) : (
            // Display placeholder text if no image source is provided
            <span className="text-gray-500">Project Image</span>
          )}
        </div>

        {/* Text Content - Contains the award, title, and description */}
        <div className="flex-1">
          {/* Award Section - Displays the trophy icon and the award text */}
          <div className="flex items-center text-white/80 text-sm mb-2">
            {/* Trophy Image - Renders the appropriate trophy PNG based on trophyType */}
            {trophyImagePath && ( // Render image only if a path is found
                <img
                src={trophyImagePath} // Use the path from the mapping
                alt={`${award} Trophy`}
                className="w-5 h-5 mr-1 object-contain" // Adjust size and styling as needed
              />
            )}
            {/* Award Text */}
            <span>{award}</span>
          </div>

          {/* Title - Displays the title of the hackathon entry */}
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{title}</h3>

          {/* Description - Displays the description of the hackathon entry */}
          <p className="text-white/70 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonEntry;
