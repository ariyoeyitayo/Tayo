import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './Tailwind.css';
import "./fontawesome-free-6.4.2-web/css/all.css";
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
