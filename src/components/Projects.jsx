const Projects = () => {
  const projects = [
    {
      title: "Digital Pulse",
      description: "A modern web design landing page showcasing creative digital solutions. Features responsive design, interactive elements, and a clean user interface.",
      image: "/p1.png",
      link: "http://mohsan1081.atwebpages.com/",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Netflix Clone",
      description: "A feature-rich Netflix clone with movie browsing, authentication, and responsive design. Includes movie trailers, categories, and a modern UI.",
      image: "/p2.png",
      link: "http://netflix-clone-mpqmfagbo-mohsan-alis-projects-a2ecac61.vercel.app",
      technologies: ["CSS", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "iNotebook",
      description: "A full-stack note-taking application with user authentication, CRUD operations, and real-time updates. Secure and user-friendly interface.",
      image: "/p3.png",
      link: "https://i-note-book-mohsan.vercel.app/",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1B1B2F]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-[#7F00FF]/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B2F] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#7F00FF]">{project.title}</h3>
                <p className="text-[#EDEDED] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-[#7F00FF]/20 text-[#00E0FF] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#7F00FF] text-white rounded-lg hover:bg-[#00E0FF] transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
