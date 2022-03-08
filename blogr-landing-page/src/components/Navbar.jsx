import { Box,Text, Button, ButtonGroup, Menu, MenuButton,  MenuList, MenuItem,} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"
import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <Box bg="black" w="100%" p={4} color="black">
        <Text color="white">
          Blogr
        </Text>

        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}>
                Products
              </MenuButton>
              <MenuList>
                <MenuItem>Product 1</MenuItem>
                <MenuItem>Product 2</MenuItem>
                <MenuItem>Product 3</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}>
                Company
              </MenuButton>
              <MenuList>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Team</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu >
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}>
                Connect
              </MenuButton>
              <MenuList>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Newsletter</MenuItem>
                <MenuItem>LinkedIn</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Box>

    </div>
  )
}
