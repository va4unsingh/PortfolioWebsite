// src/components/sections/EnhancedAbout.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfilePic from "../../assets/anime.jpg";

function RealAbout() {
  const [activeTab, setActiveTab] = useState("journey");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Journey timeline data
  const journeyTimeline = [
    {
      year: "2025 February",
      title: "Started My Coding Journey",
      description:
        "Began learning web development with HTML, CSS, and JavaScript through online resources and small personal projects.",
    },
    // {
    //   year: "2024 June",
    //   title: "First Freelance Project",
    //   description:
    //     "Completed my first freelance assignment: a responsive website for a local business, gaining hands-on client experience.",
    // },
    // {
    //   year: "2024 November",
    //   title: "Deepened Front-End Skills",
    //   description:
    //     "Focused on React and Tailwind CSS, building a variety of personal projects to improve my UI development.",
    // },
    {
      year: "2025 April",
      title: "Expanded to Full-Stack Development",
      description:
        "Started learning backend technologies like Node.js and MongoDB, creating full-stack apps to round out my skill set.",
    },
    // {
    //   year: "2025 April",
    //   title: "Contributed to Open Source",
    //   description:
    //     "Made contributions to open-source projects, collaborating with other developers and refining my teamwork approach.",
    // },
    {
      year: "2025 May",
      title: "Seeking New Client Projects",
      description:
        "Looking for exciting opportunities to work with clients on web apps.",
    },
  ];

  // Projects I'm proud of
  const projects = [
    {
      name: "In Progress...",
      description:
        "A responsive eCommerce app that allows users to browse products, manage their cart, and complete secure purchases.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "GraphQL", "NextAuth"],
      color: "from-cyan-500 to-teal-600",
    },
    {
      name: "Upcoming Project...",
      description:
        "An advanced task management app designed to help users stay organized. It features to-do lists, deadlines, notifications, and seamless collaboration with team members.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT Authentication"],
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Upcoming Project",
      description:
        "A secure and intuitive admin panel for managing user data, content, and system settings. It features role-based access control, real-time data updates, and detailed analytics dashboards for efficient administration.",
      tech: ["React", "Node.js", "MongoDB", "Redux", "JWT Authentication"],
      color: "from-indigo-500 to-purple-600",
    },
  ];

  // Personal interests
  const interests = [
    {
      name: "Full-Stack Web Development",
      icon: "🎯",
      desc: "Building scalable, user-focused applications with seamless front-end and back-end integration.",
    },
    {
      name: "Open Source",
      icon: "🌍",
      desc: "Collaborating on projects and contributing to codebases that drive growth in the developer community.",
    },

    {
      name: "Learning New Technologies",
      icon: "🚀",
      desc: "Constantly expanding my skillset to build better solutions.",
    },
    {
      name: "Problem Solving",
      icon: "🧩",
      desc: "Delivering efficient solutions to complex technical challenges.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20  mt-20 lg:mt-20 md:mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4  text-blue-400">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
              I create engaging digital experiences that live at the
              intersection of design and technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Image & Info - 5 Columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800">
              {/* Profile Image with Animated Gradient Overlay */}
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={ProfilePic}
                    alt="Profile"
                    className="h-[300px] object-cover w-full "
                  />
                </div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/70 to-transparent flex items-end">
                  <motion.div
                    className="p-6 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-white">
                      Varun Singh
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">
                      Full Stack Developer
                    </p>

                    {/* Social Links with hover effects */}
                    <div className="flex space-x-3 mt-4">
                      {/* GitHub */}
                      <a
                        href="https://github.com/va4unsingh"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-gray-800/80 hover:bg-blue-600/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="#linkedin"
                        className="w-10 h-10 rounded-full bg-gray-800/80 hover:bg-blue-600/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/va4unsingh"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-gray-800/80 hover:bg-blue-600/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Personal Bio */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  Who Am I
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a self-taught full stack developer focused on building
                  scalable, high-performance websites with seamless user
                  experiences. I streamline complex challenges into clean,
                  intuitive, and maintainable designs, delivering functional and
                  efficient solutions.
                </p>

                {/* Personal Info with animated icons */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        va4unsingh.indie@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan
                    -500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        New Delhi, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        Open for new projects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Download CV Button with animated effect
                <div className="mt-8">
                  <a
                    href="#download"
                    className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white font-medium overflow-hidden"
                  >
                    Button background
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:scale-105"></span>

                    Button shine effect
                    <span className="absolute top-0 left-0 w-20 h-full bg-white/20 skew-x-[-30deg] transition-all duration-500 transform translate-x-[-4rem] group-hover:translate-x-[18rem]"></span>

                    Button content
                    <span className="relative flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 group-hover:animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Download CV
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Content Section - 7 Columns */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl shadow-xl overflow-hidden bg-gray-900/70 backdrop-blur-sm border border-gray-800">
              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-800">
                <button
                  onClick={() => setActiveTab("journey")}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === "journey"
                      ? "text-white border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  My Journey
                </button>
                <button
                  onClick={() => setActiveTab("interests")}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === "interests"
                      ? "text-white border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Interests
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === "projects"
                      ? "text-white border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Projects
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Journey Tab */}
                {activeTab === "journey" && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                  >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-2">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                      My Development Journey
                    </h3>

                    {/* Fixed alignment in timeline section */}
                    <div className="relative ml-4">
                      {/* Main timeline vertical line - Fixed position */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-300"></div>

                      {journeyTimeline.map((item, index) => (
                        <motion.div
                          key={index}
                          className="mb-12 last:mb-0 relative pl-8"
                          variants={itemVariants}
                        >
                          {/* Timeline dot with pulse effect - Fixed position */}
                          <div className="absolute left-0 top-2 -translate-x-1/2 z-10">
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center relative">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                              {/* Pulse animation */}
                              <div className="absolute w-full h-full rounded-full bg-blue-500 opacity-70 animate-ping"></div>
                            </div>
                          </div>

                          {/* Horizontal connector line - Fixed position */}
                          <div className="absolute left-0 top-2 w-4 h-0.5 bg-blue-500"></div>

                          {/* Content with proper spacing */}
                          <div>
                            {/* Year badge */}
                            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/50 text-blue-300 border border-blue-800/40">
                              {item.year}
                            </div>

                            <h4 className="text-lg font-bold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-300">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center mr-2">
                          <svg
                            className="w-4 h-4 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            ></path>
                          </svg>
                        </span>
                        Where I'm Headed
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        My goal is to continue growing as a developer while
                        creating meaningful web experiences that solve real
                        problems. I'm particularly interested in exploring
                        emerging technologies like Web3 and pushing the
                        boundaries of what's possible on the web.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Interests Tab */}
                {activeTab === "interests" && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">
                      What Drives Me
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="p-5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900/30 hover:to-cyan-900/30 transition-colors duration-500 border border-gray-700 hover:border-blue-700"
                        >
                          <div className="flex items-center mb-3">
                            <span className="text-3xl mr-3">
                              {interest.icon}
                            </span>
                            <h4 className="text-lg font-semibold text-white">
                              {interest.name}
                            </h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {interest.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30">
                      <h4 className="text-lg font-bold text-white mb-3">
                        A Bit More About Me
                      </h4>
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        I began my coding journey through self-learning and
                        online resources. What started as curiosity has grown
                        into a genuine passion for web development.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        I am committed to continuous learning through coding
                        challenges, building personal projects, and contributing
                        to the developer community. I prioritize writing clean,
                        efficient, and maintainable code.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Projects Tab */}
                {activeTab === "projects" && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">
                      Featured Projects
                    </h3>

                    <div className="space-y-6">
                      {projects.map((project, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="overflow-hidden group rounded-lg border border-gray-700 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                          <div className="p-6 relative">
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

                            <h4 className="text-lg font-bold text-white mb-2 relative z-10">
                              {project.name}
                            </h4>
                            <p className="text-gray-300 mb-4 relative z-10">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 relative z-10">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800/40"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Gradient bar at bottom */}
                          <div
                            className={`h-1 w-full bg-gradient-to-r ${project.color}`}
                          ></div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <a
                        href="/projects"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        View All Projects
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RealAbout;
