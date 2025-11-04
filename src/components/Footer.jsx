import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-gray-400 py-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-1 opacity-0 animate-fadeIn">
                <p className="text-sm">
                    © 2025 <span className="text-white font-medium">Fereç Serkan Albayrak</span> – All rights reserved.
                </p>

                <div className="flex space-x-5">
                    <a
                        href="https://github.com/Serkan-Albayrak"
                        target="_blank"
                        className="hover:text-green-400 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ferec-serkan-albayrak/"
                        target="_blank"
                        className="hover:text-green-400 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:serkanalbayrak47@gmail.com"
                        className="hover:text-green-400 transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
