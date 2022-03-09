import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { Navbar } from './Navbar'

export const Hero = () => {
  return (
    <div className='nav-hero-container'>

      <Navbar/>

      <div className='hero-header'>
        <Text>
          A mondern publishing platform
        </Text>
      </div>

      <div className='hero-sub'>
        <Text>
          Grow your audience and build your online brand
        </Text>
      </div>

      <div className='hero-btns'>
        <Button >
          Start For Free
        </Button>
        <Button variant="outline">
          Learn More
        </Button>
      </div>
    </div>

    
  )
}
