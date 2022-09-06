import React from 'react'
import { Box, Flex, Heading, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react'

// Import document
import resume from '../document/resume-cedrick-lupembe.pdf'

// Links
import links from '../Social/Links'

const scrollbox = () => {
  return (

    <>
        <Box 
            w={['100%', '100%', '65%']} 
            ml={['0', '0','45%']} 
            h='auto' 
            p='20px' 
            bgColor='white' 
            color='black'
        >
            
            <Flex w='100%' h='auto' direction={['column', 'column', 'row']}>

                <Box w={['100%', '100%', '15%']} h='100%'>
                    <Heading as='h4' fontSize='lg' p='10px' bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'>INTRO</Heading>
                </Box>

                <Box w={['100%', '100%','85%']} h='auto' p='10px'>

                    <Text>
                        I am currently in my third year (out of three) in networking 
                        and telecommunications at the Hope Africa University
                    </Text>

                    <Text mt={'20px'}>
                        I'm also a Software Front-end Web Developer at <Link href={links.fyatu} target='_blank' fontWeight={'bold'}>@Fyatu</Link> where I apply 
                        all my expertise in development based on various technologies
                    </Text>

                    <Text mt='20px'>
                        I enjoy being the bridge between programming and design, 
                        and feel right at home as a front end web developer. 
                        I'm experienced in developing and designing products for the web, 
                        from simple landing pages to full-fledged web apps.
                    </Text>

                </Box>

            </Flex>

            <Flex w='100%' h='auto' direction={['column', 'column', 'row']} mt='30px'>

                <Box w={['100%', '100%', '15%']} h='100%'>
                    <Heading 
                        as='h4' 
                        fontSize='lg' 
                        p='10px' mb={['15px', '15px', '0']}
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                    >
                        SKILLS
                    
                    </Heading>
                </Box>

                <Box w={['100%', '100%','85%']} h='auto' p='10px'>

                    <Text>
                       <Flex fontSize={['15px', 'md', 'lg']} direction={['column', 'column', 'row']}>
                            <Text fontWeight='700' mr='10px' mb={['13px', '15px', '0']}>Languages:</Text> 
                            JavaScript(ES6), HTML5, CSS3
                       </Flex>
                    </Text>

                    <Text mt='20px'>
                        <Flex direction={['column', 'column', 'row']}>
                                <Text fontWeight='700' mr='10px' mb={['13px', '15px', '0']}>Frameworks & Libraries: </Text>
                                React, Next, Express, Node, Chakra UI, Tailwind, MongoDB  
                        </Flex>
                    </Text>

                    <Text mt='20px'>
                        <Flex direction={['column', 'column', 'row']}>
                            <Text fontWeight='700' mr='10px' mb={['13px', '15px', '0']}>Tools & Platforms: </Text> 
                                Netlify, Heroku, REST
                                APIs, Vercel, AWS, MongoDB,
                                Firebase, Webpack, Postman, Hashnode 
                        </Flex>
                    </Text>

                </Box>

            </Flex>

            <Flex w='100%' h='auto' direction={['column', 'column', 'row']} mt='30px'>

                <Box w={['100%', '100%', '15%']} h='100%'>
                    <Heading as='h4' fontSize='lg' p='10px' bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'>EDUCATION</Heading>
                </Box>

                <Box w={['100%', '100%','85%']} h='auto' p='10px'>

                    <Box>
                       <Heading as='h4' fontSize={'18px'}>Hope Africa University</Heading>
                       <Heading as='h6' fontSize={'12px'} mt={'13px'}>Feb 2020 — Present// Bujumbura</Heading>
                    </Box>

                    <Text mt='15px'>
                        Bachelor of Science in Telecommunications engineering
                        and management Concentration 
                        <Text>Minors in System and network security</Text>
                    </Text>

                    <Text mt='15px' fontSize={'13px'} color='blackAlpha.600'>
                        EXPECTED GRADUATION: FEBRUARY 2023
                    </Text>

                </Box>
                
            </Flex>

            <Flex w='100%' direction={['column', 'column', 'row']} h='auto' mt='30px'>

                    <Box w={['100%', '100%', '15%']} h='100%'>
                        <Heading as='h4' fontSize='lg' p='10px' bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'>EXPERIENCE</Heading>
                    </Box>

                    <Box w={['100%', '100%','85%']} h='auto' p='10px'>

                        <Box>

                            <Flex justify={'space-between'} align={'center'}>
                                <Box>
                                    <Heading as='h4' fontSize={['15px', '18px', '18px']}>@Fyatu, .Inc</Heading>
                                    <Text fontSize={['12px', '12px', '14px']} m={['5px', '5px', 2]} color='blackAlpha.600'>Front End Software Developer</Text>
                                </Box>
                            
                            <Heading as='h6' fontSize={['10px', '12px', '12px']} mt={'13px'} color='blackAlpha.600'>June 2022 — Present// Bujumbura</Heading>
                            </Flex>

                            <UnorderedList mt={'15px'}>

                                <ListItem mt={'10px'}>
                                    Created web applications based on React, integrating Facebook's
                                    best practices for interface design.
                                </ListItem>

                                <ListItem mt={'10px'}>Designed REST calls using React to streamline user interface</ListItem>

                                <ListItem mt={'10px'}>
                                    Quickly learned new skills and applied them to daily tasks, improving
                                    efficiency and productivity.
                                </ListItem>

                                <ListItem mt={'10px'}>Participated in team-building activities to enhance working.</ListItem>

                            </UnorderedList>

                        </Box>

                        <Box mt={'50px'}>

                            <Flex justify={'space-between'} align={'center'}>
                                <Box>
                                    <Heading as='h4' fontSize={['15px', '18px', '18px']}>@FongoLab</Heading>
                                    <Text as='h5' fontSize={['12px', '12px', '14px']} m={['5px', 2, 2]} color='blackAlpha.600'>Full Stack Software Developer</Text>
                                </Box>
                                <Heading as='h6' fontSize={['10px', '12px', '12px']} mt={'13px'} color='blackAlpha.600'>Mar 2020 — Mai 2022 // Bujumbura, BU</Heading>
                            </Flex>

                            <UnorderedList mt={'15px'}>

                                <ListItem mt={'10px'}>
                                    Wrote server-side and client-side code for various projects using
                                    PHP, HTML, CSS, and JavaScript, specifically with React.js, Node.js,
                                    Express.js, Laravel, and CodeIgniter frameworks
                                </ListItem>

                                <ListItem mt={'10px'}>Corrected, modified and upgraded software to improve performance.</ListItem>

                                <ListItem mt={'10px'}>
                                    Designed intuitive graphical user interfaces using knowledge of
                                    serial communications and database design to improve user
                                    experience. Participated in team-building activities to enhance
                                    working.
                                </ListItem>

                            </UnorderedList>

                        </Box>

                    </Box>
                   
            </Flex>

            <Flex w='100%' direction={['column', 'column', 'row']} h='auto' mt='30px'>

                <Box w={['100%', '100%','15%']} h='100%'>
                    <Heading 
                        as='h4' 
                        fontSize='lg' 
                        p='10px'
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                    >
                        PROJECTS

                    </Heading>
                </Box>

                <Box w={['100%', '100%','85%']} h='auto' p='10px'>

                    <Box>
                       <Heading as='h4' fontSize={['15px', '18px', '18px']}><Link href={links.portfolio} _hover={{ textDecoration: "none" }}>cedricklupembe.com</Link></Heading>
                       <Text mt={'13px'}>
                            Portfolio site designed and coded from scratch to 
                            showcase my skills and past work
                        </Text>
                    </Box>

                    <Box mt={'50px'}>
                       <Heading as='h4' fontSize={['15px', '18px', '18px']}>
                            <Link href={links.Devfind} target='_blank' _hover={{ textDecoration: "none" }}>Github Profile</Link>
                        </Heading>
                       <Text mt={'13px'}>
                            Web app built with JavaScript, Sass, and Github API for
                            visualizing personalized Github data such as Repositories,
                            Followers, Following, Biography,and many more
                        </Text>
                    </Box>

                    <Flex 
                        justify='center' 
                        align='center' 
                        mt={['80px', '100px', '120px']} 
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                    >

                        <Link 
                            href={resume}
                            download
                            py={['15px', '15px', '20px']} 
                            px={['50px', '80px', '100px']} 
                            bgColor='blackAlpha.200'
                            borderRadius='5px'
                            _hover={{textDecor: 'none'}}
                            fontSize={['12px', 'initial', 'initial']}
                        >
                            GRAB A PDF OF MY FULL RESUME
                        </Link>
                    </Flex>

                </Box>
                
            </Flex>


        </Box>
    </>
  )
}

export default scrollbox