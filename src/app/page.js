import { lazy, Suspense } from 'react';
import { SparklesPreview } from './Hero/Hero';
import StickyBottomNavigation from './Navbar/Navbar';


const Intro = lazy(() => import('./pages/intro'));
const Skills = lazy(() => import('./pages/skills'));
const Project = lazy(() => import('./pages/projects'));
const Contact = lazy(() => import('./pages/contact'));

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      <SparklesPreview />
      <StickyBottomNavigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Intro />
        <Skills />
        <Project />
        <Contact />
      </Suspense>
    </div>
  );
}
