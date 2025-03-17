
import './App.css';
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";
import {Footer} from "./components/footer/Footer";

function App() {
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  return (
      <div className="App">
          <Header/>
          <Skills/>
          <Footer/>
          <button className='scrollButton hide' onClick={handleClick}><i className="fa-solid fa-arrow-up"></i></button>
      </div>
  );
}

export default App;
