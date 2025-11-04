import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "HowMany",
        description:
            "AI-powered counting and identification system using Google Cloud Vision and React Native.",
        tech: "React Native • Google Cloud Vision • Node.js",
        link: "https://github.com/keremkurtulus77/HowMany",
        image: "/howmany-cover.jpg",
        logo: "/howmany-logo.png",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio site built with React and Tailwind CSS.",
        tech: "React • Tailwind CSS • Vite",
        link: "#",
        image: "/portfolio-cover.jpg",
        logo: "/portfolio-logo.png",
    },
    {
        title: "Other Project",
        description: "Example project description goes here.",
        tech: "JavaScript • API • Web Design",
        link: "#",
        image: "/project3-cover.jpg",
        logo: "/project3-logo.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#161616] text-white">
            <div className="max-w-6xl mx-auto px-6 opacity-0 animate-fadeIn">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            data-aos={idx === projects.length - 1 ? "zoom-out-up" : "zoom-out"}
                            className="bg-[#2A2A2A] rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 overflow-hidden"
                        >
                            {/* Kapak görseli */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-[#161616]/80 p-2 rounded-lg">
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>

                            {/* İçerik */}
                            <div className="p-6 flex flex-col justify-between min-h-[220px]">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2 text-green-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3">{project.description}</p>
                                    <p className="text-sm text-gray-500">{project.tech}</p>
                                </div>

                                <div className="mt-6">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400 transition-colors"
                                    >
                                        View Project <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
