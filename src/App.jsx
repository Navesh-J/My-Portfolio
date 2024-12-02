import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router'
import Sidebar from './Components/Sidebar/Sidebar'
import Contact from './Components/Contact/Contact'

// const About = () => <div className="p-5">The Wanderer's Tales Content</div>;
// const Projects = () => <div className="p-5">Works Wrought by Hand and Mind Content</div>;
// const Skills = () => <div className="p-5">The Armory of Skills Content</div>;
// const Achievements = () => <div className="p-5">Trophies of the Realm Content</div>;
// const Contact = () => <div className="p-5">Summoning Circle Content</div>;

function App() {

  return (
    <Router>
      <div className='flex items-center h-screen transition-all duration-150 bg-slate-950'>
        <Sidebar/>
        <main className='flex-1 overflow-auto'>
          <Routes>
            {/* <Route path='/about' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/achievements' element={<Achievements/>}></Route>*/}
            <Route path='/contact' element={<Contact/>}></Route> 
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
