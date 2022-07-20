import logo from './logo.svg';
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
             <Navigation/>
        <Introduction/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
