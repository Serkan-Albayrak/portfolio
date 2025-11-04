import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#161616] text-white">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 opacity-0 animate-fadeIn">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
                    About Me
                </h2>

                {/* Giriş Yazısı */}
                <div className="text-gray-400 text-base sm:text-lg mb-10 text-center leading-relaxed">
                    <p className="mb-4">
                        Hi! I’m <span className="text-green-400 font-semibold">Fereç Serkan Albayrak</span>,
                        a Computer Programming graduate with a passion for building efficient,
                        user-friendly, and visually appealing applications.
                    </p>
                    <p>
                        I specialize in web and mobile development using modern technologies.
                        I constantly explore new tools to improve my workflow and create innovative digital solutions.
                    </p>
                </div>

                {/* Yetenek Kartları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div data-aos="zoom-out" className="bg-[#262626] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Programming / Web & Mobile
                        </h3>
                        <p className="text-gray-300 text-sm">
                            React Native, HTML5, CSS3, JavaScript, Node.js, Python, C#, C++, Tailwind CSS, Bootstrap
                        </p>
                    </div>

                    <div data-aos="zoom-out" className="bg-[#262626] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Database
                        </h3>
                        <p className="text-gray-300 text-sm">MS SQL, MongoDB</p>
                    </div>

                    <div data-aos="zoom-out" className="bg-[#262626] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Tools</h3>
                        <p className="text-gray-300 text-sm">Git, GitHub, Linux</p>
                    </div>

                    <div data-aos="zoom-out" className="bg-[#262626] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Cloud / API</h3>
                        <p className="text-gray-300 text-sm">
                            Google Cloud Vision API, REST API Integration
                        </p>
                    </div>

                    <div data-aos="zoom-out" className="sm:col-span-2 bg-[#262626] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Hardware & IT
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Computer hardware assembly, troubleshooting and maintenance, network setup,
                            user support, and security system installation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
