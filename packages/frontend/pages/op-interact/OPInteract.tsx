import { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import CrossChain from '../../contracts/CrossChain.json'
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';

const contractAddressGor = '0x4e6a0019e44a3a611fd9d821cbd17a2e596a48cb' //change w/deployed smart contract address
const contractAbi = CrossChain.output.abi 

const OPInteract = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [message, setMessage] = useState('');

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
      await contract.send(message, { value: ethers.utils.parseEther('0.1') }); // Sending 0.1 ETH as an example
      const data = await contract.data();
      setData(data);
    }
  }

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  return (
    <Container paddingTop={'5rem'}>
      <Heading
        bg='white'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'>
          Chat with Goerli
      </Heading>

      <Box marginTop={'2rem'} >
        <Text color={'#fff'}>Please ensure you are connected to the Optimism Goerli testnet!</Text>
        <Text color={'#fff'}marginTop={'2rem'}>This is a simple example of how to interact with a smart contract deployed on the Goerli testnet from Optimisim Goerli.</Text>
        <Text marginTop={'2rem'} color={'#fff'}>View the message sent from the Goerli testnet and send a message back! Send a message to view the message.</Text>
        <Text color={'#fff'} marginTop={'1rem'}>View message sent from Goerli: {data}</Text>

        <Input marginTop={'2rem'} type="text" value={message} color={'#fff'} onChange={handleMessageChange} placeholder="Type a message" />
        <Button onClick={sendMessage} marginTop={'1rem'}>Send Message</Button>
      </Box>

    </Container>
  );
}

export default OPInteract;