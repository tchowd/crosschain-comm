import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GorInteract from './GORInteract'
import { useAccount } from 'wagmi'
import Auth from '../auth'

const GorPage: NextPage = () => {
  const { isConnected } = useAccount()

  return(isConnected) ? (
    <Box backgroundColor={'#000'}>
        <GorInteract />
    </Box>
  ) :(
    <Auth />
  )
}

export default GorPage
