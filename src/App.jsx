import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, StarsCanvas } from "./components";

const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
