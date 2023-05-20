import { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import CrossChain from '../../contracts/CrossChain.json'
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { useChainId } from 'wagmi';

const contractAddressGor = '0xd27eb0ada1e4079cb56ba79c1794a0ab5dbbcdf2' //change w/deployed smart contract address
const contractAbi: ethers.ContractInterface = CrossChain.output.abi;

const GoInteract = () => {
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
  console.log('data', data);

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
          Chat with Optimism Goerli
      </Heading>

      <Box marginTop={'2rem'} >
        <Text color={'#fff'}>Please ensure you are connected to the Goerli testnet!</Text>
        <Text color={'#fff'} marginTop={'2rem'}>Interact with a smart contract deployed on the Optimism Goerli testnet from Goerli.</Text>
        <Text marginTop={'2rem'} color={'#fff'}>View the message sent from the Optimisim Goerli testnet and send a message back! Send a message to view the message.</Text>
        <Text color={'#fff'} marginTop={'1rem'}>View message sent from Optimisim Goerli: {data}</Text>

        <Input marginTop={'2rem'} type="text" color={'#fff'} value={message} onChange={handleMessageChange} placeholder="Type a message" />
        <Button onClick={sendMessage} marginTop={'1rem'}>Send Message</Button>
      </Box>
    </Container>
  );
}

export default GoInteract;
