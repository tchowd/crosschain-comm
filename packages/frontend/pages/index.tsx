import Head from 'next/head';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Container, Stack, Heading, Button, Text, Link, Box, } from '@chakra-ui/react';
import { AspectRatioBox } from "@chakra-ui/core";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <Box 
    bgGradient='linear-gradient(90deg, rgba(21,39,101,1) 7%, rgba(47,17,68,1) 14%, rgba(18,9,38,1) 23%, rgba(18,20,42,1) 31%, rgba(1,1,1,1) 49%, rgba(0,0,0,1) 50%, rgba(1,1,3,1) 50%, rgba(18,20,42,1) 67%, rgba(18,9,38,1) 76%, rgba(47,17,68,1) 84%, rgba(21,39,101,1) 91%)'>
      {/* 12142A */}
      <Navbar />
     <Container maxW={'5xl'} marginTop={'6rem'}>
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
            <AspectRatioBox maxW="560px" ratio={16 / 9}>
              <Box
                as="video"
                src="https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/header-animation.mp4"
                autoPlay
                loop
              />
            </AspectRatioBox>
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
                fontWeight='bold'> Get Started</Text>
              </Button>
            </Link>
            <Link href='https://github.com/tchowd/guess-secret-number' textDecoration={'none'} _hover={{textDecoration: 'none'}}>
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
