// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

// Removed React.memo wrapper and React.FC type annotation
// Destructuring props directly in the function parameters
const ProjectCard = ({ project }: { // Explicitly define the type of destructured props here
    project: {
        id: number;
        number: string;
        title: string;
        category: string;
        description: string;
        imageSrc: string; // Path to the project image
        link?: string; // Optional link for the project image
    };
    index: number; // The index of the project in the array
}) => {

  // Removed the switch statement for layout patterns.
  // Applying fixed classes for a consistent layout.

  // Handle click to redirect
  const handleImageClick = () => {
    if (project.link) {
      window.open(project.link, '_blank'); // Open link in a new tab
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between py-6 px-4 sm:px-6 md:px-8 m-2 md:m-0 border border-white border-opacity-20 bg-transparent overflow-hidden h-full" // Removed m-5, adjusted padding
    >
      {/* Large Project Number - Absolutely Positioned (Consistent Top-Left) */}
      {/* Increased padding around the number */}
      <div className="absolute top-0 left-0 text-3xl md:text-4xl p-6 md:p-8 font-bold text-white text-opacity-10"> {/* Increased padding */}
        {project.number}
      </div>

      {/* Content Area (Text Block and Image Block) */}
      {/* Using flex-col for stacking, consistent layout */}
      <div className="flex flex-col justify-between h-full">

        {/* Text Content Block (Title, Category, Description) */}
        {/* Consistent text alignment (Left) */}
        {/* Adjusted padding top to account for the absolute number and reduce space */}
        {/* Adjusted padding left/right to align with the number padding */}
        <div className="flex flex-col text-left items-start z-10 pt-16 px-6 sm:px-8 md:px-10 pb-4"> {/* Adjusted pt and px */}
            {/* Title and Category */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-white">{project.title}</h3> {/* Responsive text size */}
              <p className="text-xs sm:text-sm text-gray-400">{project.category}</p> {/* Responsive text size */}
            </div>
            {/* Description */}
            <div className="mt-2">
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p> {/* Responsive text size */}
            </div>
        </div>

        {/* Project Image Block - Now a regular div */}
        {/* Added flex-grow to help manage space within the flex container */}
        {/* Added cursor-pointer class for visual indication of clickability */}
        {/* Added hover effects using Tailwind classes */}
        {/* The onClick handler remains the same */}
        {/* Added responsive padding to the image container */}
         {/* Adjusted padding left/right to align with the number padding */}
        <div
            // Added ease-in-out and changed transition-opacity to transition-all
            className="relative w-full flex-grow rounded-xl overflow-hidden z-10 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-105 px-6 sm:px-8 md:px-10 pb-4"
            onClick={handleImageClick} // Handle click to redirect
        >
            {/* Use the Image component here - Using explicit width/height */}
            {/* Make sure these width/height are representative of the display size */}
            {/* Also, ensure your source images are reasonably sized, not huge files */}
            {/* Added object-contain for responsive image scaling */}
            <Image
              src={project.imageSrc}
              alt={`${project.title} image`}
              width={500} // Using the explicit width
              height={300} // Adjusted height for a potentially wider aspect ratio
              className="object-contain w-full h-full" // Ensure image scales within its container
            />
        </div>

      </div> {/* End Content Area */}
    </div>
  );
};

export default ProjectCard;
