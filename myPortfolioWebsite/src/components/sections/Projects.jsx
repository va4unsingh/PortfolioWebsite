import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubLogo from "../../assets/githubLogo.png";
import Sidearrow from "../../assets/sidearrow.svg";
import EstateReal from "../../assets/Estate.png";
import Black from "../../assets/demoBlack.svg";
import Saveur from "../../assets/Saveur.png";
import { motion } from "framer-motion";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Enhanced project variants with more dramatic entrance animation
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.5,
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
      borderColor: "rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.01 },
    },
  };

  // Animate tech tags on initial load too
  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 2px 8px rgba(59,130,246,0.3)",
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Sample project data to avoid repetition
  const projects = [
    {
      title: "Restaurant Website – Saveur",
      description:
        "Showcases a refined multi-page restaurant experience using React and Tailwind CSS, complete with dark mode, animated transitions, and responsive design.",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Vite",
        "React Router",
        "Framer Motion",
      ],

      githubLink: "https://github.com/va4unsingh/Restro-Project",
      liveLink: "https://restro-project-two.vercel.app/",
      image: Saveur, // import this at the top
    },
    // {
    //   title: "Modern Real Estate Website",
    //   description:
    //     "A fully responsive real estate platform built with React and Tailwind CSS, featuring dynamic routing and modern UI design.",
    //   technologies: [
    //     "React",
    //     "Tailwind CSS",
    //     "JavaScript",
    //     "Vite",
    //     "React Router",
    //     "Framer Motion",
    //     "Vercel",
    //   ],
    //   githubLink: "https://github.com/va4unsingh/Real-Estate-website",
    //   liveLink: "https://real-estate-website-self-ten.vercel.app/",
    //   image: EstateReal,
    // },

    // {
    //   title: "Comming soon...",
    //   description:
    //     "Full-stack task management application with user authentication",
    //   technologies: ["React", "Express", "MongoDB", "JWT"],
    //   githubLink: "https://github.com/va4unsingh",
    //   liveLink: "https://github.com/va4unsingh",
    // },
    // {
    //   title: "Comming soon...",
    //   description: "Admin dashboard for managing products and orders",
    //   technologies: ["React", "Firebase", "Chart.js", "Material UI"],
    //   githubLink: "https://github.com/va4unsingh",
    //   liveLink: "https://github.com/va4unsingh",
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 mt-20 lg:mt-0 xl:mt-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Project Portfolio
          </motion.h2>

          <motion.div
            className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col  rounded-xl border border-white/10 transition-all backdrop-blur-sm "
                variants={projectVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: `${100 / 2.14}%` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="px-6 py-2 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    {project.technologies.map((tech, key) => (
                      <motion.span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                        variants={techVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: 0.4 + key * 0.05 + index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center mt-auto pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors my-2"
                      whileHover={{ scale: 1.05, x: 3 }}
                    >
                      Source code{" "}
                      <img className="w-5" src={GithubLogo} alt="GitHub" />
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors my-2"
                      whileHover={{ scale: 1.05, x: 3 }}
                    >
                      Live Preview{" "}
                      <img className="w-4" src={Sidearrow} alt="Arrow" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Projects;
