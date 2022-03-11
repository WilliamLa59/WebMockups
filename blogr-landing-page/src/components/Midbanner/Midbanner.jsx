import React from 'react'
import { Text } from '@chakra-ui/react'
import midBannerImg from '../../StartingFiles/images/illustration-phones.svg'
import "./Midbanner.scss"

export const Midbanner = () => {
  return (
    <div className='midbanner-container'>

        <div className='midbanner-img-container'>
            <img src={midBannerImg} alt="" />
        </div>

            <div className='midbanner-text-container'>

                <div className='midbanner-header'>
                    <Text fontSize="33" fontWeight="bold">State of the Art Infrastructure</Text>
                </div>

                <div className='midbanner-text'>
                    <Text fontSize="16">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </Text>
                </div>

            </div>
    </div>
  )
}
