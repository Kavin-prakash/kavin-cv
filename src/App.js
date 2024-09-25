import './App.css';
import { ScrollTop } from './Common/ScrollTop';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Education } from './Components/Education';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Skills } from './Components/Skills';
import "react-chatbot-kit/build/main.css";
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact/>
      <ScrollTop />
    </div>

  );
}

export default App;
