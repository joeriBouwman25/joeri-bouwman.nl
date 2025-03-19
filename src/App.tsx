
import './App.css';
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
      <div className="App">
          <Header/>
          <Skills/>
          <Footer/>
      </div>
  );
}

export default App;
