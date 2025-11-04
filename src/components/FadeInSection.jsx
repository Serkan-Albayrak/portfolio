import { useRef, useEffect, useState } from "react";

export default function FadeInSection({ children, className = "" }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current); // Tek seferlik animasyon
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} opacity-0 transform translate-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : ""
                }`}
        >
            {children}
        </div>
    );
}
