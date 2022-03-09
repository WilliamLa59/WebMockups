import React from 'react'
import { Text } from '@chakra-ui/react'
export const Lead = () => {
  return (
    <div className='lead-container'>
      <div className='lead-header'>
        <Text>
          Designed for the future
        </Text>
      </div>

      <div className='lead-text-container'>
        <div>
          <Text>Introducing and extensible editor</Text>
          <Text>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
            change the looks of a blog.
          </Text>
        </div>

        <div>
          <Text>Robust content management</Text>
          <Text>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.

          </Text>
        </div>
      </div>
    
      <div className='lead-img-container'>

      </div>

    </div>
  )
}
