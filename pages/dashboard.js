import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid
} from '@chakra-ui/core';

import Analytics from '../components/metrics/Analytics';
import Buttondown from '../components/metrics/Buttondown';
import Container from '../components/Container';
import GitHub from '../components/metrics/Github';
import Gumroad from '../components/metrics/Gumroad';
import YouTube from '../components/metrics/Youtube';
import TopTracks from '../components/TopTracks';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://kurnhy.my.id/dashboard';
const title = 'Dashboard – Kurniawan Alcantara';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

const Dashboard = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://kurnhy.my.id/static/images/dashboard.jpg',
              alt: description,
              width: 1280,
              height: 720
            }
          ]
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Dashboard
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              Ini adalah personal dashboard, dibuat dengan framework Next.js API
              dan dihosting dengan fitur serverless functions. Saya memamkai
              dashboard untuk melacak perkembangan media mainstream ku seperti
              Youtube, Github, dll.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Analytics />
              <GitHub />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Gumroad />
              <Buttondown />
            </SimpleGrid>
          </Flex>
          <Heading letterSpacing="tight" as="h2" size="xl">
            Lagu Favorit
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </Text>
          <TopTracks />
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
