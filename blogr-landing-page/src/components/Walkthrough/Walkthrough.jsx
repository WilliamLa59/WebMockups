import React from 'react'
import { Text,Center } from '@chakra-ui/react'
import wlkthrImg from '../../StartingFiles/images/illustration-laptop-desktop.svg'
import './Walkthrough.scss'

export const Walkthrough = () => {
  return (
    <div className='wlkthr-container'>

      <div className='wlkthr-img-contrainer'>
        <img src={wlkthrImg} alt="" />
      </div>

      
        <div className='wlkthr-text-container'>
          <div>
            <Text fontSize='20' fontWeight="bold" className='text-title'>Free, open, simple</Text>
            <Text fontSize="16">
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </Text>
          </div>
          <div>
            <Text fontSize='20' fontWeight="bold" className='text-title text-spacer'>Powerful tooling</Text>
            <Text fontSize="16">
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
            </Text>
          </div>
        </div>

    </div>
  )
}
