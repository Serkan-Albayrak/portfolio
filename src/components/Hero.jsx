import React from 'react';

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-[#161616] text-white px-4 sm:px-8 opacity-0 transition-opacity duration-1000 delay-200 animate-fadeIn"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-green-500">Serkan</span>. <br className="hidden sm:block" />
                I develop web and mobile projects.
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10">
                I develop clean and user-friendly websites using modern technologies. I also build
                responsive web and mobile applications. I'm open to freelance opportunities.
            </p>

            <a
                href="#projects"
                className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
                View My Projects
            </a>
        </section>
    );
}
