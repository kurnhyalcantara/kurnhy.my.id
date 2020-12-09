import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  Avatar
} from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={5}
        mt={[0, 6]}
        mb={8}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Avatar
              name="Kurniawan Alcantara"
              src="https://firebasestorage.googleapis.com/v0/b/kurnhy-blog.appspot.com/o/1.jpg?alt=media&token=2d4406d8-a304-4e66-98fb-14c4eea40890"
              sx={{ maxWidth: '5rem' }}
              mr={4}
            />
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost">
              Me
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost">
              Blog
            </Button>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink>
        </Box>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
        />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
