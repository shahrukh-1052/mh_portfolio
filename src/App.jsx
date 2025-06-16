import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        {/* ✅ Footer Section */}
        <footer className='w-full text-center py-4 border-t border-gray-700 mt-10'>
          <p className='text-sm text-white'>
            © 2025 Mohammed Habeebuddin. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
