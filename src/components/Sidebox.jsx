import { Flex, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import bg from '../assets/african.jpeg'

// Icons
import {BsTwitter, BsGithub, BsGlobe} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'

// Links social 
import links from '../Social/Links'

const Sidebox = () => {

  return (
    <>

        <Flex 
            width={['100%', '100%', '45%']} 
            height={['100vh', '100vh', '100vh']} 
            pos={['relative', 'relative', 'fixed']} 
            zIndex={5} 
            top="0" 
            left="0"
            bgImg={bg}
            bgPos='center'
            bgSize='cover'
            bgRepeat='no-repeat'
            color='white'
            // display={'none'}

            _before={{
                content: '""',
                bgGradient:'linear(to-l, #7928CA, #FF0080)',
                pos: "absolute",
                opacity: 0.6,
                bgSize: "cover",
                width: "100%",
                height: "100%"
            }}
            align="center"
            justify="center"
        >

            <Flex 
                pos="relative" 
                w={['100%', '100%', '60%']} 
                h='auto'
                align='center' 
                direction='column'
                lineHeight={['6', '7', '7']}
            >

                <Heading as='h2' my='20px'>Hey, I'm Cedrick</Heading>
                <Text mx={['20%', '0', '0']} textAlign={['center']}>A Front-End Software Developer at @Fyatu</Text>
                <Text display={['none', 'block', 'block']}>Well-organized person, problem solver with high attention to detail.</Text>

                <Flex w={['100%', '100%', '50%']} h='auto' my='20px' justify={['center', 'center', 'initial']}>

                    <Link 
                        href={links.Twitter} 
                        py='15px' 
                        px='20px' 
                        borderRadius='50%' 
                        textDecor='none'
                        _hover={{ textDecoration: "none" }}
                        target='_blank'
                    >
                        <BsTwitter />

                    </Link>

                    <Link 
                        href={links.Github} 
                        py='15px' 
                        px='20px' 
                        borderRadius='50%' 
                        textDecor='none'
                        _hover={{ textDecoration: "none" }}
                        target='_blank'
                    >
                        <BsGithub />

                    </Link>

                    <Link 
                        href={links.Linkedin} 
                        py='15px' 
                        px='20px' 
                        borderRadius='50%' 
                        textDecor='none'
                        _hover={{ textDecoration: "none" }}
                        target='_blank'
                    >
                        <FiLinkedin />

                    </Link>

                    <Link 
                        href={links.portfolio} 
                        py='15px' 
                        px='20px' 
                        borderRadius='50%' 
                        textDecor='none'
                        _hover={{ textDecoration: "none" }}
                        target='_blank'              
                    >
                        <BsGlobe />

                    </Link>

                </Flex>
                
            </Flex>



            
        </Flex>

    </>
  )
}

export default Sidebox