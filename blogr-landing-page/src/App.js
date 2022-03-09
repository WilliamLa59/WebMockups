import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Lead } from './components/Lead/Lead';
import { Walkthrough } from './components/Walkthrough/Walkthrough';

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
