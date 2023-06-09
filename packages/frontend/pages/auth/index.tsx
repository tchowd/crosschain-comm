import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import SelectContract from './SelectContract'
import OPPage from '../op-interact'

const Auth: NextPage = () => {
  return (
    <Box backgroundColor={'#000'}>
        <Navbar/>
        <SelectContract/>
    </Box>
  )
}

export default Auth
