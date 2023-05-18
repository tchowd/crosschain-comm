import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GorInteract from './GORInteract'
import { useAccount } from 'wagmi'
import Auth from '../auth'
import { goerli } from 'wagmi/chains'


const GorPage: NextPage = () => {
  const { isConnected } = useAccount()

  return(isConnected && goerli) ? (
    <Box backgroundColor={'#000'}>
        <Navbar />
        <GorInteract />
    </Box>
  ) :(
    <Auth />
  )
}

export default GorPage
