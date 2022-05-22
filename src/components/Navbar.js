import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Link,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
  MenuItem,
  Center,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue('telegram.100', 'telegram.900')} px={4}>
    <Container as={Stack} maxW={'6xl'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>Logo</Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link as={ReactLink} to="/">
              Home
            </Link>
            <Link as={ReactLink} to="/about">
              About
            </Link>
            <Link as={ReactLink} to="/pricing">
              Pricing
            </Link>
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/avataaars/163.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/avataaars/163.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Profile</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>logout</MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher />
          </Stack>
        </Flex>
      </Flex>
      </Container>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={ReactLink} to="/">
              Home
            </Link>
            <Link as={ReactLink} to="/about">
              About
            </Link>
            <Link as={ReactLink} to="/pricing">
              Pricing
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
