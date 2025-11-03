import './App.css';
import {Hero} from "./components/hero/Hero";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";
import {Skills} from "./components/skills/Skills";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
      <div className="App">
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
