import { Box,Text, Button, Grid, Menu, MenuButton,  MenuList, MenuItem,} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"
import React from 'react'

export const Navbar = () => {
  return (
    <Box bg="transparent" w="100%" p={4} color="black" display="flex">
      
      <div className='nav-logo'>
        <Text fontSize="24" fontWeight="bold">
          Blogr
        </Text>
      </div>
      
      <div className='nav-menulinks'>
        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                <Text textDecoration={ isOpen? "underline" : "none" }>Products {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Overview</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Marketplace</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Integration</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                <Text textDecoration={ isOpen? "underline" : "none" }>Company {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Team</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Careers</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                <Text textDecoration={ isOpen? "underline" : "none" }>Connect {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Newsletter</MenuItem>
                <MenuItem>LinkedIn</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>

      <div className='nav-menuButtons'>
        <Button variant="ghost">Login</Button>
        <Button>Sign Up</Button>
      </div>

    </Box>
  )
}
