import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GoInteract from './GoInteract'
import { useAccount } from 'wagmi'
import Auth from '../auth'
import { goerli } from 'wagmi/chains'


const GoPage: NextPage = () => {
  const { isConnected } = useAccount()

  if (isConnected) {
    return(
      <Box backgroundColor={'#000'}>
          <Navbar />
          <GoInteract />
      </Box>
    )
  }
  return(
      <Auth />
  )
}

export default GoPage
