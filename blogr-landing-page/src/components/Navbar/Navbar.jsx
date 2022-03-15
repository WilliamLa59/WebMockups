import {Text, Button, Menu, MenuButton,  MenuList, MenuItem, Stack, Flex, IconButton, Collapse, onToggle, useDisclosure} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon , HamburgerIcon} from "@chakra-ui/icons"
import React from 'react'
import './Navbar.scss'


export const Navbar = () => {

  const {isOpen, onToggle} = useDisclosure();

  return (
    <div className='nav-container'>
      
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <Text fontSize='32' fontWeight='bold'>
            BIogr
          </Text>
        </div>

        
        <Stack className='nav-link-container' direction="row" spacing={4} align="center" display={['none', 'none', 'flex', 'flex']}>
          <Menu className="nav-links">
            {({ isOpenD }) => (
              <>
                <MenuButton isActive={isOpenD}>
                  <Text textDecoration={ isOpenD? "underline" : "none" }>Products {isOpenD? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
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
            {({ isOpenD }) => (
              <>
                <MenuButton isActive={isOpenD}>
                  <Text textDecoration={ isOpenD? "underline" : "none" }>Company {isOpenD? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
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
            {({ isOpenD }) => (
              <>
                <MenuButton isActive={isOpenD}>
                  <Text textDecoration={ isOpenD? "underline" : "none" }>Connect {isOpenD? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
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
      
        <Flex className='nav-btns-container' display={['none', 'none', 'flex', 'flex']}>
          <Button className='login-btn btn-spacer' variant="secondary1">Login</Button>
          <Button variant="primary1">Sign Up</Button>
          {/* className='signup-btn' */}
        </Flex>
        
        <Flex className="mobile-nav" display={['flex', 'flex', 'none', 'none']}>
          <Menu color='black'>
            <MenuButton as={IconButton} size='lg' icon={<HamburgerIcon/>} variant='ghost' />
            
            <MenuList>
              <Menu className="nav-links" color='black'>
                
                <>
                  <MenuButton onClick={onToggle} color="black">
                    <Text>Products {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <Collapse in={isOpen} animateOpacity color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>Overview</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Pricing</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Marketplace</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Features</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Integration</MenuItem>
                  </Collapse>

                  <MenuButton onClick={onToggle} color="black">
                    <Text>Company {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <Collapse in={isOpen} animateOpacity color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>About</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Team</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Blog</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Careers</MenuItem>
                  </Collapse>

                  <MenuButton onClick={onToggle} color="black">
                    <Text>Connect {isOpen? <ChevronUpIcon/>:<ChevronDownIcon />}</Text>
                  </MenuButton>
                  <Collapse in={isOpen} animateOpacity color="black">
                    <MenuItem _focus={{fontWeight: "bold"}}>Contact</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>Newsletter</MenuItem>
                    <MenuItem _focus={{fontWeight: "bold"}}>LinkedIn</MenuItem>
                  </Collapse>
                </>
                
              </Menu>

            </MenuList>  
          </Menu>
        </Flex>
      </div>

    </div>
  )
}
