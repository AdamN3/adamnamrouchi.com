import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    number: string;
    title: string;
    role: string;
    techIcons: string[];
    tag?: string;
    imageSrc: string;
    link: string;
  };
  index: number;
}

const TECH_ICON_MAP: Record<string, string> = {
  'Next.js': '/techstack/nextjs.svg',
  React: '/techstack/react.svg',
  TypeScript: '/techstack/typescript.svg',
  'Tailwind CSS': '/techstack/tailwind.svg',
  'Framer Motion': '/techstack/framermotion.svg',
  Python: '/techstack/python.svg',
  FastAPI: '/techstack/fastapi.svg',
  'Scikit-learn': '/techstack/scikitlearn.svg',
  Streamlit: '/techstack/streamlit.svg',
  PostgreSQL: '/techstack/postgresql.svg',
  'Anthropic API': '/techstack/anthropic.svg',
  Vercel: '/techstack/vercel.svg',
  Railway: '/techstack/railway.svg',
};

// --- Optimization 1: Use React.memo ---
// Wrap the component with React.memo. This prevents the component from re-rendering
// if its props (project and index) have not shallowly changed.
const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  // Determine the layout pattern based on the index (0, 1, 2, 3 repeats)
  const pattern = index % 4;

  // Define classes for positioning the large project number absolutely
  let numberPositionClasses = '';
  // Define classes for text alignment of the content block
  let contentAlignmentClasses = '';
  // Define order classes for the image and text blocks
  let imageOrderClass = '';
  let textOrderClass = '';


  switch (pattern) {
    case 0: // Pattern 1: Number Top-Left, Text Top-Right, Image Below Text
      numberPositionClasses = 'top-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 1: // Pattern 2: Number Bottom-Left, Text Top-Right, Image Above Text
      numberPositionClasses = 'bottom-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
    case 2: // Pattern 3: Number Top-Right, Text Top-Left, Image Below Text
      numberPositionClasses = 'top-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 3: // Pattern 4: Number Bottom-Right, Text Top-Left, Image Above Text
      numberPositionClasses = 'bottom-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
  }

  return (
    // Use motion.div for potential future animations (like fade-in on scroll)
    // Add a thin white border and transparent background
    // Use 'relative' for positioning context for the absolute number
    // Use flex-col to stack content vertically, justify-between to space text and image
    // Removed aspect-square to allow height to be determined by content
    <motion.div
      className="relative flex flex-col justify-between py-6 px-15 md:m-0 m-5 border border-white border-opacity-20 bg-transparent overflow-hidden h-full"
      // Optional: Add Framer Motion initial/animate/whileHover props here (for the whole card)
      // For example: initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    >
      {/* Large Project Number - Absolutely Positioned */}
      <div className={`absolute md:text-6xl text-3xl p-6 font-bold text-white text-opacity-10 ${numberPositionClasses}`}>
        {project.number}
      </div>

      {/* Content Area (Text Block and Image Block) */}
      <div className="flex flex-col justify-between h-full">

        {/* Text Content Block */}
        <div className={`flex flex-col ${contentAlignmentClasses} ${textOrderClass} z-10 p-6`}>
            <div className="flex items-center gap-2">
              <h3 className="md:text-xl text-md font-semibold text-white">{project.title}</h3>
              {project.tag && (
                <span className="text-[10px] md:text-xs px-2 py-1 rounded-full border border-green-400/50 text-green-300">
                  {project.tag}
                </span>
              )}
            </div>
            <div className="mt-2">
              <p className="md:text-sm text-xs text-gray-400">{project.role}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.techIcons.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-md border border-white/20 bg-white/5"
                  title={tech}
                  aria-label={tech}
                >
                  <Image
                    src={TECH_ICON_MAP[tech] ?? '/techstack/javascript.svg'}
                    alt={`${tech} icon`}
                    width={18}
                    height={18}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain"
                  />
                </div>
              ))}
            </div>
        </div>

        {/* Project Image Block */}
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full flex-grow rounded-xl overflow-hidden z-10 ${imageOrderClass}`}
            initial={{ opacity: 0.7 }} // Changed initial opacity to 70%
            whileHover={{ opacity: 1, scale: 1.05 }} // Hover effects: opacity 100%, scale 10% (1.05 is 5%)
            transition={{ duration: 0.3 }} // Smooth transition for hover effects
        >
            {/* Use the Image component here - Using explicit width/height */}
            {/* Make sure these width/height are representative of the display size */}
            {/* Also, ensure your source images are reasonably sized, not huge files */}
            <Image
              src={project.imageSrc}
              alt={`${project.title} image`}
              width={500} // Using the explicit width
              height={500} // Using the explicit height
              // --- Optimization 2: Image Loading ---
              // layout="intrinsic" or "fixed" work with explicit width/height
              // layout="responsive" is often better if width changes (e.g., on mobile) and requires a parent with width
              // layout="fill" requires a parent with relative/absolute positioning and dimensions
              // The current explicit width/height with default layout is essentially "intrinsic"
              // Add 'priority' only for images above the fold that need to load quickly.
              // If you have many cards, DON'T add priority to all of them.
              // priority={index === 0} // Example: Add priority only to the first image if it's visible initially
            />
        </motion.a>

      </div> {/* End Content Area */}
    </motion.div>
  );
}); // End of React.memo wrap

ProjectCard.displayName = 'ProjectCard'; // Add a display name for better debugging

export default ProjectCard;