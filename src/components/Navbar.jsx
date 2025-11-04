import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-[#111111]/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center opacity-0 animate-fadeIn">

                {/* Sol taraf: site adı */}
                <div className="text-xl md:text-2xl font-bold tracking-wide text-green-400">
                    Fereç Serkan Albayrak
                </div>

                {/* Desktop menü + Dark/Light butonu */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="space-x-8 text-gray-300">
                        <a href="#about" className="hover:text-green-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
                    </div>
                </div>

                {/* Mobil menü ikonu */}
                <button
                    className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobil menü (açılır/kapanır) */}
            {isOpen && (
                <div className="md:hidden bg-[#161616] border-t border-gray-800 px-6 py-4 animate-fadeIn">
                    <a href="#about" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#projects" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#contact" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}
