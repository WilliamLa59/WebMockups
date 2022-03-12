import {Text, Button, Menu, MenuButton,  MenuList, MenuItem, Stack} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"
import React from 'react'
import './Navbar.scss'


export const Navbar = () => {
  return (
    <div className='nav-container'>
      
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <Text fontSize="24" fontWeight="bold">
            Blogr
          </Text>
        </div>
          <Stack className='nav-link-container' direction="row" spacing={4} align="center">
            <Menu className="nav-links">
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen}>
                    <Text textDecoration={ isOpen? "underline" : "none" }>Products {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <MenuList color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>Overview</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Pricing</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Marketplace</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Features</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Integration</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>

            <Menu className="nav-links">
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen}>
                    <Text textDecoration={ isOpen? "underline" : "none" }>Company {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <MenuList color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>About</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Team</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Blog</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Careers</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>

            <Menu className="nav-links">
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen}>
                    <Text textDecoration={ isOpen? "underline" : "none" }>Connect {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <MenuList color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>Contact</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Newsletter</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>LinkedIn</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Stack>
      </div>

      <div className='nav-btns-container'>
        <Button className='login-btn btn-spacer' variant="secondary1">Login</Button>
        <Button variant="primary1">Sign Up</Button>
        {/* className='signup-btn' */}
      </div>

    </div>
  )
}
