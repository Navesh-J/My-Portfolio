import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import About from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Homepage from './Components/Homepage/Homepage';

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
          path="/"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <Homepage />
            </motion.div>
          }
        />
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
          path="/skills"
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
        <Route
          path="/projects"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <Projects />
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
        <main className="flex-1 overflow-y-auto max-xl:h-full ">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
