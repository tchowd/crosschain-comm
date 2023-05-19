import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Container, Stack, Heading, Button, Text, Link, Box, } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { jsx } from '@emotion/react'

export default function Home() {

  return (
    <Box backgroundColor={'#000'}>
      <Navbar />
     <Container maxW={'5xl'} marginTop={'4rem'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            bgClip='text'
            color='white'
            fontSize='7xl'
            fontWeight='bold'>
            Cross-Chain Messaging
          </Heading>
          <video 
            src="https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/header-animation.mp4"
            width={'1800'} controls autoPlay muted />
          <Text color={'white'} maxW={'3xl'} fontSize={'xl'}>
            Powered by LayerZero
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link href='/auth' textDecoration={'none'} _hover={{textDecoration: 'none'}}>
              <Button
                // borderRadius={'2rem'}
                color={'white'}
                height={'3rem'}
                px={6}
                borderRadius={'0'}
                textDecoration={'none'}
                borderColor={'white'}
                _hover={{  color: 'white'}}>
                <Text 
                color={'black'}
                _hover={{textDecoration: 'underline' }}
                fontWeight='bold'> Get Started</Text>
              </Button>
            </Link>
            <Link href='https://github.com/tchowd/crosschain-comm' textDecoration={'none'} _hover={{textDecoration: 'none'}}>
              <Button
                height={'3rem'}
                px={6}
                color={'white'}
                borderRadius={'0'}
                textDecoration={'none'}
                borderColor={'white'}
                _hover={{  color: 'white'}}>
                <Text 
                color={'black'}
                _hover={{textDecoration: 'underline' }}
                fontWeight='bold'> Github</Text>
              </Button>
            </Link>
          </Stack>
          <Box marginBottom='50rem'>
            <Text color='white'>Built by{' '}
                <Link href='https://twitter.com/tchowd_' textDecoration={'none'}>Turja Chowdhury</Link>
            </Text>
        </Box>
        </Stack>
      </Container>
      
    </Box>
  );
}
