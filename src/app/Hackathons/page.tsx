// src/app/Hackathons.tsx

"use client"

import React from "react"; // Removed useState
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";


// Removed items constant

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

export default function Hackathons() {
  // Removed mobileMenuOpen state

  return (
    <> 
      {/* Main content area for Hackathons */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20"> {/* Kept padding top */}
         {/* Optional: Add background elements like Threads if desired */}
         {/*
         <div style={{ width: '100%', height: '600px', position: 'absolute', top: '0', zIndex: -1 }}>
           <Threads
             amplitude={2.5}
             distance={0}
             enableMouseInteraction={false}
           />
         </div>
         */}

        {/* Hackathon Entries Section - Moved from page.tsx */}
        <div className="flex w-full items-center justify-center p-4"> {/* Adjusted margin */}
          <BlurText
            text="Hackathon Entries"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-7xl font-extrabold text-center" // Adjusted size
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        <div className="flex flex-row md:flex-row w-full max-w-5xl mx-auto items-center justify-center p-4 mt-5 md:mt-10 space-y-5 md:space-y-0 md:space-x-10"> {/* Adjusted layout and spacing */}
            <p>
            Besides being a developer and content creator, I am big on joining competitions, like hackathons. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:
            </p>
        </div>
        {/* Add more sections specific to the Hackathons page as needed */}

      </main>

      {/* Footer Section - Copied from page.tsx */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20"> {/* Added margin top */}
        <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p> {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
  );
}