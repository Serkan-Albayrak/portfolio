import { Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import FadeInSection from "./components/FadeInSection";

// Lazy load
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Projects /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
        <FadeInSection><Footer /></FadeInSection>
      </Suspense>
    </div>
  );
}
