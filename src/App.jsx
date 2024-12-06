// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router , Routes,Route, useLocation} from 'react-router'
// import About from './Components/About/About'
// import Sidebar from './Components/Sidebar/Sidebar'
// import Contact from './Components/Contact/Contact'

// // const About = () => <div className="p-5">The Wanderer's Tales Content</div>;
// // const Projects = () => <div className="p-5">Works Wrought by Hand and Mind Content</div>;
// // const Skills = () => <div className="p-5">The Armory of Skills Content</div>;
// // const Achievements = () => <div className="p-5">Trophies of the Realm Content</div>;
// // const Contact = () => <div className="p-5">Summoning Circle Content</div>;

// function App() {
  
//   return (
//     <Router>
//       <div className='flex items-center h-screen transition-all duration-150 bg-slate-950'>
//         <Sidebar/>
//         <main className='flex-1 overflow-auto'>
//           <Routes>
//             <Route path='/about' element={<About/>}></Route>
//             {/*<Route path='/projects' element={<Projects/>}></Route>
//             <Route path='/skills' element={<Skills/>}></Route>
//             <Route path='/achievements' element={<Achievements/>}></Route>*/}
//             <Route path='/contact' element={<Contact/>}></Route> 
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import About from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

function AnimatedRoutes() {
  const location = useLocation(); // Get the current route location

  // Animation variants
  const pageVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/about"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/Skills"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <Skills />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex items-center h-screen transition-all duration-150 bg-slate-950">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
