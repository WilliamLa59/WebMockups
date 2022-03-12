import React from 'react'
import { Text } from '@chakra-ui/react'
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        
        <div className='footer-logo'>
          <Text  fontSize="24" fontWeight="bold">Blogr</Text>
        </div>

        <div className='col1'>
          <div className='col1-title col-title'>
            <Text>Product</Text>
          </div>
          <div className='item-container'>
            <Text className='col-items'>Overview</Text>
            <Text className='col-items'>Pricing</Text>
            <Text className='col-items'>Marketplace</Text>
            <Text className='col-items'>Features</Text>
            <Text className='col-items'>Integrations</Text>
          </div>
        </div>

        <div className='col2'>
          <div className='col2-title col-title'>
            <Text>Company</Text>
          </div>
          <div className='item-container'>
            <Text className='col-items'>About</Text>
            <Text className='col-items'>Team</Text>
            <Text className='col-items'>Blog</Text>
            <Text className='col-items'>Careers</Text>
          </div>
        </div>
        
        <div className='col3'>
          <div className='col3-title col-title'>
            <Text>Connect</Text>
          </div>
          <div className='item-container'>
            <Text className='col-items'>Contact</Text>
            <Text className='col-items'>Newsletter</Text>
            <Text className='col-items'>LinkedIn</Text>
          </div>
        </div>
      
      </div>
    </footer>
  )
}
