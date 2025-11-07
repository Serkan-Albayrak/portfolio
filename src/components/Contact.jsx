import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#161616] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">My Information</h2>

                <div
                    className="bg-[#2A2A2A] p-8 rounded-lg shadow-md max-w-xl mx-auto space-y-4 text-left"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <p><span className="font-semibold text-green-500">Name:</span> Fereç Serkan Albayrak</p>
                    <p><span className="font-semibold text-green-500">Email:</span> <a href="mailto:serkanalbayrak47@gmail.com" className="text-gray-300 hover:text-green-400 transition">serkanalbayrak47@gmail.com</a></p>
                    <p><span className="font-semibold text-green-500">Phone:</span> +90 552 853 0047</p>
                    <p><span className="font-semibold text-green-500">Location:</span> Türkiye, İstanbul</p>
                </div>

                <div className="flex justify-center space-x-8 mt-10">
                    <a href="https://github.com/Serkan-Albayrak" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 font-medium transition-colors"> GitHub </a>
                    <a href="https://www.linkedin.com/in/ferec-serkan-albayrak/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 font-medium transition-colors"> LinkedIn </a>
                    <a href="mailto:serkanalbayrak47@gmail.com" className="text-gray-300 hover:text-green-400 font-medium transition-colors"> Email </a>
                </div>
            </div>
        </section>
    );
}
