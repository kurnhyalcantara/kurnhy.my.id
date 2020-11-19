import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';
import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
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
            Hey, I’m Kurniawan Alcantara
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Saya seorang developer, penulis, dan content creator. Saya sementara
            ini menjalankan studi di Fakultas Keguruan di IAI As'adiyah
            Sengkang. Well, disini adalah tempatku menghosting personal blogku
            dengan framework NextJs dan container Vercel.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="HMI As'adiyah Web App"
            description="Membangun web app dimulai dari scratch (ground) dengan full feature untuk keperluan humas organisasi. 
            Salah satu pengalaman yang berharga buatku"
            href="https://hmi-asadiyah.web.app/"
            icon="react2025"
          />
          <ProjectCard
            title="Mastering Firebase"
            description="Menguasai pengembangan app dan web dengan salah satu produk terbaik google, Firebase."
            href=""
            icon="nextjs"
          />
          <ProjectCard
            title="Bugismart App"
            description="Saya rasa ini adalah pengalaman pertamaku dalam hal Android App Development, ini belum selesai sejak 2 tahun lalu
            dan tidak akan pernah selesai :v terkendala support finansial"
            href=""
            icon="jamstackfns"
          />
        </Flex>
        <Timeline />
        <Subscribe />
      </Stack>
    </Container>
  );
};

export default Index;
