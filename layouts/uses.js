import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar
} from '@chakra-ui/core';

import Container from '../components/Container';

export default function UsesLayout({ children }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <NextSeo
        title="Perangkat - Kurniawan Alcantara"
        description={`Ini semua adalah perangkat yang aku gunakan sehari-hari untuk keperluan coding, video, dan musik`}
        canonical="https://kurnhy.my.id/perangkat"
        openGraph={{
          url: 'https://kurnhy.my.id/perangkat',
          title: 'Perangkat - Kurniawan Alcantara',
          description: `Ini semua adalah perangkat yang aku gunakan sehari-hari untuk keperluan coding, video, dan musik`
        }}
      />
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            My Gear
          </Heading>
          <Flex mt={2} w="100%">
            <Text fontSize="sm" color={textColor[colorMode]}>
              Ini semua adalah perangkat yang aku gunakan sehari-hari untuk
              keperluan coding, video, dan musik
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
