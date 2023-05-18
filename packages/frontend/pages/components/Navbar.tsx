import {
    Box,
    Flex,
    IconButton,
    Link,
    Popover,
    PopoverTrigger,
    useDisclosure,
    useColorMode,
    Center,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Box>
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
  
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'} />
  
          </Flex>
  
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  }
  
  const DesktopNav = () => {
  
    return (
        <Center 
        color="white"
        >
        {/* <Box borderWidth="1px" borderRadius="lg" boxShadow="xl"> */}
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'xl'}
                    fontWeight={500}
                    color={'white'}
                    _hover={{
                      textDecoration: 'underline',
                      color: '#898AF6',
                      animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                      transform: 'translate3d(0, 0, 0)'
                    }}
                    marginRight={'1rem'}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
              </Popover>
            </Box>

          ))}
        </Center>
    );
  };
  
  
  interface NavItem {
    label: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: '</A> Home',
      href: '/',
    },
    {
      label: '</A> About',
      href: '/about',
    }
  ];
  