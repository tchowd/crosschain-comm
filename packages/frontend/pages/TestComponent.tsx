import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import { abi } from '../contracts/CrossChain.json'; // Import the ABI 
import CrossChain from '../contracts/CrossChain.json'

const contractAddressGor = '0x4e6a0019e44a3a611fd9d821cbd17a2e596a48cb' //change w/deployed smart contract address
const contractAbi = CrossChain.output.abi 

export default function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [data, setData] = useState(null);

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
        console.log('Please install MetaMask!');
      }
    }

    setupProvider();
  }, []);

  useEffect(() => {
    if (contract) {
      async function fetchData() {
        const data = await contract?.data();
        setData(data);
      }

      fetchData();
    }
  }, [contract]);

  async function sendMessage(message) {
    if (contract) {
      await contract.send(message, { value: ethers.utils.parseEther('0.1') }); // Sending 0.1 ETH as an example
      const data = await contract.data();
      setData(data);
    }
  }

  return (
    <div>
      <h1>LayerZeroTest Contract</h1>
      <p>Data: {data}</p>
      <button onClick={() => sendMessage('Hello, World!')}>Send Message</button>
    </div>
  );
}
