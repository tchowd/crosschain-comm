import { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import CrossChain from '../../contracts/CrossChain.json'
import {  Box, Flex, Badge, Icon, Button, Container, Heading, Input, Text, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { motion } from "framer-motion";

const contractAddressGor = '0x4e6a0019e44a3a611fd9d821cbd17a2e596a48cb' //change w/deployed smart contract address
const contractAbi = CrossChain.output.abi 

const OPInteract = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    async function setupProvider() {
      if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddressGor, contractAbi, signer);

        setProvider(provider);
        setSigner(signer);
        setContract(contract);
      } else {
        console.log('Wallet Not Connected');
      }
    }
    setupProvider();
  }, []);

  useEffect(() => {
    // if (contract) {
      async function fetchData() {
        const data = await contract?.data();
        setData(data);
      // }
      fetchData();
    }
  }, [contract]);

  const sendMessage = async () => {
    if (contract) {
      await contract.send(message, { value: ethers.utils.parseEther('0.1') }); // sending 0.1 ETH as an example
      const data = await contract.data();
      setData(data);
    }
    setMessageSent(true);
  }
  console.log('data', data);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }


  return (
    <Container marginTop={'5rem'} borderWidth={'0.1rem'} padding={'2rem'}>
    <Heading
      bg='white'
      bgClip='text'
      fontSize='5xl'
      fontWeight='extrabold'>
        Chat with Goerli
    </Heading>

    <Box marginTop={'2rem'} p="2"  fontWeight="bold">
      <Text color={'#fff'}>Please ensure you are connected to the Optimism Goerli testnet!</Text>
    </Box>

    <Box p="2" >
      <Text color={'#fff'}>Interact with a smart contract deployed on the Goerli testnet from Optimism Goerli testnet.</Text>
      <Text marginTop={'2rem'} color={'#fff'}>View the message sent from the Goerli testnet and send a message back! Send a message to view the message.</Text>
    </Box>
      <Flex direction="column" align="start" marginTop="2rem"  p="2" >
        <Flex>
        <Box backgroundColor="blue.500" p="2" borderRadius="full" mr="2" mt='1' height={'1rem'} width={'1rem'} />
        <Text color="#fff" fontWeight="bold">
          New message from Goerli testnet: 
        </Text>
        </Flex>
        {data && (
          <Container marginTop={'1rem'} p="2" backgroundColor="white" borderRadius={'0.5rem'}>
          <Text mt="1" fontSize="1em" color="#000" >
            {data}
          </Text>
          </Container>
        )
          }
      </Flex>

      <Input marginTop={'2rem'} type="text" color={'#fff'} value={message} onChange={handleMessageChange} placeholder="Type a message" />
      <Button onClick={sendMessage} marginTop={'1rem'}>Send Message</Button>

    {messageSent && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Alert status="success" borderRadius={'0.5rem'} marginTop={'2rem'} variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" >
          <AlertTitle mt={2} mb={1} fontSize="lg"> Message Sent!</AlertTitle>
        </Alert>
      </motion.div>
    )}
  </Container>
  );
}

export default OPInteract;