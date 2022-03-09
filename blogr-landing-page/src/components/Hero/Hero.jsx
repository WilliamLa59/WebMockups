import React from 'react'
import { Text, Button, Center } from '@chakra-ui/react'
import { Navbar } from '../Navbar/Navbar'
import './Hero.scss';

export const Hero = () => {
  return (
    <div className='nav-hero-container'>
    
      <Navbar/>

      <div className="hero-container">

        <Center>
          <div className='hero-header'>
            <Text fontSize="100" fontWeight="500" letterSpacing="0.5">
              A mondern publishing platform
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-sub'>
            <Text fontSize="28" fontWeight="500">
              Grow your audience and build your online brand
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-btns'>
            <Button >
              Start For Free
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </Center>
      </div>
    </div>

    
  )
}
