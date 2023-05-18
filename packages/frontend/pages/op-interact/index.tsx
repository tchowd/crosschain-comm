import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import OPInteract from './OPInteract'
import { useAccount } from 'wagmi'
import Auth from '../auth'

const OPPage: NextPage = () => {
  const { isConnected } = useAccount()

  return(isConnected) ? (
    <Box backgroundColor={'#000'}>
        <OPInteract />
    </Box>
  ) :(
    <Auth />
  )
}

export default OPPage
