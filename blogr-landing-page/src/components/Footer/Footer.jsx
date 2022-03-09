import React from 'react'
import { Text } from '@chakra-ui/react'
export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-logo'>
          <Text>Blogr</Text>
        </div>

        <div className='col1-title'>
          <Text>Product</Text>
        </div>

        <div className='col2-title'>
          <Text>Company</Text>
        </div>

        <div className='col3-title'>
          <Text>Connect</Text>
        </div>
        
        <div className='col1-items'>
          <Text>Overview</Text>
          <Text>Pricing</Text>
          <Text>Marketplace</Text>
          <Text>Features</Text>
          <Text>Integrations</Text>
        </div>
        <div className='col2-items'>
          <Text>About</Text>
          <Text>Team</Text>
          <Text>Blog</Text>
          <Text>Careers</Text>
        </div>
        <div className='col3-items'>
          <Text>Contact</Text>
          <Text>Newsletter</Text>
          <Text>LinkedIn</Text>
        </div>

      </div>
    </footer>
  )
}
