import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RJTV Universe- A Full-Stack OTT Platform",
    description:
      "A full-stack OTT streaming platform that allows users to browse, watch, and manage movies/shows. Features include user authentication, video streaming, and responsive UI built with MERN stack.",
    image: "/projects/Project2.png",
    tags: ["HTML/CSS", "JavaScript", "MongoDB", "Express", "NodeJS"],
    demoUrl: "https://rjtv-universe.onrender.com",
    githubUrl: "https://github.com/mishraRj/RJTV-Universe.git",
  },
  {
    id: 2,
    title: "CodeVault - A Full Stack Version Control System",
    description:
      "A full-stack GitHub-inspired VCS platform built with MERN stack. Supports repository/file management, custom CLI commands (init, commit, push, pull), JWT auth, real-time activity feed (Socket.io), issue tracking, starring, and Cloudinary image uploads.",
    image: "/projects/codeVault.png", // Use your dashboard screenshot here
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
    ],
    demoUrl: "https://version-control-systemrj.onrender.com/",
    githubUrl: "https://github.com/mishraRj/Version-Control-System",
  },
  {
    id: 3,
    title: "Vacation Rental Booking Platform",
    description:
      "A full-stack web application for short-term rental listings and bookings.",
    image: "/projects/project1.png",
    tags: ["HTML/CSS", "JavaScript", "MongoDB", "Express", "NodeJS"],
    demoUrl: "https://airbnb-replica-b13p.onrender.com/listings",
    githubUrl:
      "https://github.com/mishraRj/Vacation-Rental-Booking-Platform.git",
  },
  {
    id: 4,
    title: "Recipe Planet - Full Stack Mini Project",
    description:
      "A simple MERN app for managing recipes with basic CRUD operations, REST API, and clean React+Vanilla CSS UI. Users can add, view, update, and delete recipes easily.",
    image: "/projects/recipePlanet.png", // Use relevant screenshot here
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    demoUrl: "https://full-stack-recipe-maker.vercel.app/",
    githubUrl: "https://github.com/mishraRj/full-stack-recipe-maker",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 classic-font">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mishraRj">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
