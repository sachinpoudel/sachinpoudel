import React from 'react';

import { useEffect, useState } from 'react';
import CustomSkeleton from './CustomSkeleton';

export default function HomePage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      title: "A blog App",
      tech: " React, Node,Express and MongoDB",
      description: "A full-stack blogging platform with user authentication, blog CRUD operations. You can find code on GitHub. Currently, this might not work as expected due to deployment issues. But works fine in local environment",
      link: "https://a-full-stack-blog-app.onrender.com/"
    
    },
    {
      title: "A CSIT Notes App",
      tech: "Powered By Wordpress",
      description: "A Complete Notes Website for BSc.CSIT students, providing resources, notes, and study materials for all semesters. Currently looking for team members to improve it.",
      link: "https://mycsitpath.42web.io/"

    }
    
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm min-h-screen shadow-2xl border-x border-gray-200/40 dark:border-gray-700/40">
      {loading ? ( <CustomSkeleton variant="text" width="40%" height={100} />) : ( <div id="top" className="flex justify-between items-center mb-18">
        <div>
          <h1 className="text-4xl p-6 font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-blue-800 dark:from-white dark:via-gray-200 dark:to-blue-200 bg-clip-text text-transparent mb-2">
          Sachin Paudel
          </h1>
        </div>
      </div>)}
  
     
      {loading ? ( <CustomSkeleton variant="text" width="100%" height={240}  />) : (  <div className="mb-20 p-8 bg-gradient-to-br from-white/60 to-gray-50/60 dark:from-gray-800/40 dark:to-gray-900/40 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg backdrop-blur-sm">
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 font-medium">
        Aspiring developer currently learning Full-Stack development. I love experimenting with projects,
         improving my skills, and exploring how technology solves real-world problems.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        BSc.CSIT student — staying curious, building consistently, and learning every day.
        </p>
      </div>)}
     
    

   
      <div id="projects" className="mb-20">
      {loading ? (  <CustomSkeleton variant="text" width="40%" height={100} />) : ( <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-gradient-to-r from-blue-500 to-cyan-500 pb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          </span>
        </div>)}
       
        
        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group p-6 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">
              <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
  >
    {project.title}
  </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono bg-gray-100/60 dark:bg-gray-800/60 px-3 py-1 rounded-lg inline-block">
                {project.tech}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    
      <div id="connect">
        <h2 className="text-2xl font-bold mb-12 text-gray-900 dark:text-white border-b-2 border-gradient-to-r from-blue-500 to-cyan-500 pb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Connect
        </h2>
        <div className="grid grid-cols-2 gap-4 p-8 bg-gradient-to-br from-white/60 to-gray-50/60 dark:from-gray-800/40 dark:to-gray-900/40 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg backdrop-blur-sm">
          <div className="group">
            <a href="poudelsachin009@gmail.com" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group-hover:scale-105 inline-block">
              Email
            </a>
          </div>
          <div className="group">
            <a href="https://github.com/sachinpoudel" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group-hover:scale-105 inline-block" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="group">
            <a href="https://www.linkedin.com/in/sachin-poudel-16029a315/" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group-hover:scale-105 inline-block" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
         
        </div>
      </div>

     
      <div className="mt-20 pt-8 border-t border-gray-200/40 dark:border-gray-700/40">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
          © 2025 sachin
        </p>
      </div>
    </div>
  );
}