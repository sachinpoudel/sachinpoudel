import React from 'react';

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "A blog App",
      tech: " React, Node,Express and MongoDB",
      description: "A full-stack blogging platform with user authentication, blog CRUD operations. You can find code on GitHub. Currently, this might not work as expected due to deployment issues. But works fine in local environment",
      status : "Live",
      year : "2025",
      link: "https://a-full-stack-blog-app.onrender.com/"

    
    },
    {
      title: "A CSIT Notes App",
      tech: "Powered By Wordpress",
      description: "A Complete Notes Website for BSc.CSIT students, providing resources, notes, and study materials for all semesters. Currently looking for team members to improve it.",
      status : "Live",
      year : "2025",
      link: "https://mycsitpath.42web.io/"

    },
    {
      title: "Intermediate Ecommmerce Backend",
      tech: " TypeScript NodeJs ExpressJs Postgres and Prisma ORM",
      description: "A Intermediate level ecommerce backend with crud , Advanced Error handling and best Practices.",
      status : "Development",
      year : "2025",
      link: "https://github.com/sachinpoudel/Intermediate_Ecommerce_Backend"

    
    },
    {
      title: "A CatGpt for you",
      tech: "TypeScript Next",
      description: "A fun project CATGPT_ Meow Meow",
      status : "Live",
      year : "2025",
      link: "https://v0-catgpt-chat-app.vercel.app/"

    
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm min-h-screen shadow-2xl border-x border-gray-200/40 dark:border-gray-700/40">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-blue-800 dark:from-white dark:via-gray-200 dark:to-blue-200 bg-clip-text text-transparent mb-4">
          All Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of projects I've built using various technologies and frameworks.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {allProjects.map((project, index) => (
          <div key={index} className="group p-6 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">
              <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
  >
    {project.title}
  </a>
              </h3>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  project.status === 'Live' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  {project.year}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono bg-gray-100/60 dark:bg-gray-800/60 px-3 py-1 rounded-lg inline-block">
              {project.tech}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200/40 dark:border-gray-700/40">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
          © 2025 sachin
        </p>
      </div>
    </div>
  );
}