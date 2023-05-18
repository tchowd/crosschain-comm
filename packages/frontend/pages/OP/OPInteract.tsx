import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CrossChain from '../../contracts/CrossChain.json'
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';

const contractAddressGor = '0x4e6a0019e44a3a611fd9d821cbd17a2e596a48cb' //change w/deployed smart contract address
const contractAbi = CrossChain.output.abi 

export default function OPInteract() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function setupProvider() {
      if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
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
    if (contract) {
      async function fetchData() {
        const data = await contract.data();
        setData(data);
      }

      fetchData();
    }
  }, [contract]);

  async function sendMessage() {
    if (contract) {
      await contract.send(message, { value: ethers.utils.parseEther('0.1') }); // Sending 0.1 ETH as an example
      const data = await contract.data();
      setData(data);
    }
  }
  return (
    <Container>
      <Heading
        bg='white'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'>
          Chat with Goreli
        </Heading>
      
      <Box marginTop={'2rem'}>
        <Text color={'#fff'}>This contract is deployed on Optisim Goreli, you can view the message sent from the Goreli testnet and a send a message! </Text>
        <Text color={'#fff'} marginTop={'1rem'}>View message sent from Goreli: {data}</Text>
      </Box>
      <Box marginTop={'2rem'}>
        <Input type="text" value={message} color={'white'} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
        <Button onClick={() => sendMessage()} marginTop={'1rem'}>Send Message</Button>
      </Box>

    </Container>
  );
}
