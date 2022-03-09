import React from 'react'
import { Text } from '@chakra-ui/react'
export const Walkthrough = () => {
  return (
    <div className='wlkthr-container'>
      <div className='wlkthr-img-contrainer'>

      </div>
      <div>
        <div className='wlkthr-text-container'>
          <Text>Free, open, simple</Text>
          <Text>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </Text>
        </div>
        <div>
          <Text>Powerful tooling</Text>
          <Text>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.
          </Text>
        </div>
      </div>

    </div>
  )
}
