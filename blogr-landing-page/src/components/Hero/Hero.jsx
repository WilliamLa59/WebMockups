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
            <Text fontSize="68" fontWeight="500" letterSpacing="0.5">
              A mondern publishing platform
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-sub'>
            <Text fontSize="18" fontWeight="500">
              Grow your audience and build your online brand
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-btns'>
            <Button className='start-btn'>
              Start for Free
            </Button>
            <Button className='learn-btn'variant="outline">
              Learn More
            </Button>
          </div>
        </Center>
      </div>
    </div>

    
  )
}
