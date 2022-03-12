import React from 'react'
import { Text, Center } from '@chakra-ui/react'
import editor_desktop from '../../StartingFiles/images/illustration-editor-desktop.svg';
import './Lead.scss'

export const Lead = () => {
  return (
    <div className='lead-container'>
      
      <Center>
        <div className='lead-header'>
          <Text fontSize='36' fontWeight="bold">
            Designed for the future
          </Text>
        </div>
      </Center>

      <div className='grid-container'>
        <Center>
          <div className='lead-text-container'>

            <div>
              <Text fontSize='20' fontWeight="bold" className='text-title'>Introducing and extensible editor</Text>
              <Text fontSize='16' className='text-body'>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
              </Text>
            </div>

            <div>
              <Text fontSize='20' fontWeight="bold" className='text-title text-spacer'>Robust content management</Text>
              <Text fontSize='16' className='text-body'>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </Text>
            </div>
          </div>
        </Center>
      
        <div className='lead-img-container'>
          <img src={editor_desktop} alt="" />
        </div>

      </div>
      
    </div>
  )
}
