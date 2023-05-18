import { Container, Stack, Heading, Button, Box, Link, Text, HStack, Center, VStack } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAccount } from 'wagmi'
import OPInteract from '../OP/OPInteract'

function SelectGame() {
   const {  isConnected } = useAccount()

  return (isConnected) ? (
    <div>
         <Box backgroundColor={'#000'}>
     <Container maxW={'5xl'} marginTop={'5rem'}>
        <OPInteract />
      </Container>
    </Box>
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
                <Text size='md' marginBottom={'1rem'}> Please connect to your wallet and the Optimism Testnet.</Text>
            <ConnectButton />   
            </VStack>
        </Box>
        </Center>

        </Stack>
      </Container>
    </div>
  )
}

export default SelectGame