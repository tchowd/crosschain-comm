import { Container, Stack, Heading, Image, Box, Link, Text, HStack, Center, VStack } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAccount } from 'wagmi'
import OPInteract from '../op-interact/OPInteract'
import OPPage from '../op-interact'

function SelectContract() {
   const { isConnected } = useAccount()

  return (isConnected) ? (
    <div>
     <Container maxW={'7xl'} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
            <Center paddingTop={'2rem'}>
            <VStack>
            <Box padding={'3rem'} borderWidth="2px" borderColor={'#141414'} color='white' backgroundColor={'#141414'}>            
            
            <VStack>
                <Text size='md' marginBottom={'1rem'}> Wallet is connected. Please select the network you'd like to interact with/from.</Text>
            <ConnectButton />   
            </VStack>
        </Box>
          <HStack>
            <Link href='/op-interact'>
            <Box padding={'8rem'} borderWidth="2px" borderColor={'#141414'} color='white' backgroundColor={'#141414'}>            
            <Text> 01/ </Text>
             <HStack>
              <Image src='../../../images/star.svg' width={'10rem'}/>
              <Heading> OP Goerli Testnet </Heading>
             </HStack>
            </Box>
            </Link>
            <Link href='/goerli-interact'>
            <Box padding={'8rem'} borderWidth="2px" borderColor={'#141414'} color='white' backgroundColor={'#141414'}>            
            <Text> 02/ </Text>
              <HStack>
                <Image src='../../../images/braces.svg' width={'12rem'}/>
                <Heading> Goerli Testnet </Heading>
             </HStack>
            </Box>
            </Link>
          </HStack>
        </VStack>       
        </Center>
        </Stack>
      </Container>
    </div>
  ) :(
    <div>
     <Container maxW={'7xl'} marginTop={'10rem'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
            <Center paddingTop={'2rem'}>
            <Box padding={'3rem'} borderWidth="2px" borderColor={'#141414'} color='white' backgroundColor={'#141414'}>            
            <VStack>
                <Text size='md' marginBottom={'1rem'}> Please connect your wallet to access what comes next.</Text>
            <ConnectButton />   
            </VStack>
        </Box>
        </Center>
        </Stack>
      </Container>
    </div>
  )
}

export default SelectContract