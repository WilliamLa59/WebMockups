import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Lead } from './components/Lead';
import { Navbar } from './components/Navbar';
import { Walkthrough } from './components/Walkthrough';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Lead/>
      <Walkthrough/>
      <Footer/>      
    </div>
  );
}

export default App;
