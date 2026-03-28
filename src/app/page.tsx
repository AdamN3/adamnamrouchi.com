// app/page.tsx (or wherever your page file is)

"use client"

import React from "react"; // Removed useState

// Import your data
import { projects } from '@/data/projects'; // Adjust the path if your file is in a different location

// Import your components and blocks
// Removed GooeyNav import
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
// ScrollReveal is imported but not used in the provided code snippet, keep if used elsewhere
// import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillTag from '@/components/SkillTag';
import ProjectCard from '@/components/ProjectCard';


const stackSkills = [
  'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Next.js',
  'Node.js', 'Tailwind CSS', 'FastAPI', 'Scikit-learn', 'Streamlit',
  'OpenAI API', 'Anthropic API', 'LangChain', 'Framer Motion', 'GSAP',
  'Git', 'GitHub', 'Vercel', 'Railway', 'Figma', 'Cursor'
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <> {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20"> {/* Added padding top to account for fixed header */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="hidden md:block">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="md:hidden opacity-10">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* ... other main content elements ... */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Adam Namrouchi"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl text-center"
          />
        </div>

        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Developer · Builder · Founder"
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
            />
          </div>

        {/* style jsx block is fine */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>


        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* About Me & Create Section Start */}
             <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
               <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                 ABOUT ME
               </h3>
               <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed">
                 I&apos;m Adam Namrouchi — Full stack developer specializing in AI integration, building real applications powered by LLMs and AI APIs using tools like OpenAI, Anthropic, and LangChain.
               </p>
             </div>

             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
               <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                 STACK
               </h3>
               <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                 Technologies and tools I use to build and ship full stack and AI-powered applications.
               </p>
               <div className="flex flex-wrap gap-2">
                 {stackSkills.map(skill => (
                   <SkillTag key={skill} skillName={skill} />
                 ))}
               </div>
             </div>
           </div>
           {/* About Me & Create Section End */}


          {/* What I do Section */}
          <div className="flex flex-col">
            <BlurText
              text="What I do"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold"
            />

            <div className="hidden md:block mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/profile.png"
                altText="Adam Namrouchi"
                captionText="Adam Namrouchi"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute top-5 left-85">
                    Adam
                  </p>
                }
              />
            </div>

            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/profile.png"
                altText="Adam Namrouchi"
                captionText="Adam Namrouchi"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute">
                    Adam
                  </p>
                }
              />
            </div>


          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-40 mt-5">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        <div className="flex w-full items-center justify-center p-4 md:mt-40 mt-5 font-extrabold">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>

        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto mt-10">
             {/* Now mapping over the imported projects array */}
             {projects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </div>
        {/* Projects Section End */}
      </main>


      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20"> {/* Added margin top */}
        <p>&copy; {new Date().getFullYear()} Adam Namrouchi. All rights reserved.</p> {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}
