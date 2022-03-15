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
            <Text>
              A mondern publishing platform
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-sub'>
            <Text>
              Grow your audience and build your online brand
            </Text>
          </div>
        </Center>

        <Center>
          <div className='hero-btns'>
            <Button className='start-btn btn-spacer' variant="primary2">
              Start for Free
            </Button>
            <Button className='learn-btn' variant="secondary2">
              Learn More
            </Button>
          </div>
        </Center>
      </div>
    </div>

    
  )
}
