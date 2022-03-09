import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Lead } from './components/Lead';
import { Navbar } from './components/Navbar';
import { Walkthrough } from './components/Walkthrough';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Hero/>
      <Lead/>
      <Walkthrough/>
      <Footer/>  
      </ChakraProvider>    
    </div>
  );
}

export default App;
