import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Lead } from './components/Lead/Lead';
import { Walkthrough } from './components/Walkthrough/Walkthrough';
import { Midbanner } from './components/Midbanner/Midbanner';
import { newTheme } from './components/Shared/Theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={newTheme}>
      <Hero/>
      <Lead/>
      <Midbanner/>
      <Walkthrough/>
      <Footer/>  
      </ChakraProvider>    
    </div>
  );
}

export default App;
