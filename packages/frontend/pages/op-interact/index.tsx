import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import OPInteract from './OPInteract'
import { useAccount } from 'wagmi'
import Auth from '../auth'
import { optimismGoerli } from 'wagmi/chains'

const OPPage: NextPage = () => {
  const { isConnected } = useAccount()

  return(optimismGoerli) ? (
    <Box backgroundColor={'#000'}>
        <Navbar />
        <OPInteract />
    </Box>
  ) :(
    <Auth />
  )
}

export default OPPage
