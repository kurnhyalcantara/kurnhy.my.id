import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/*.mdx';
import { frontMatter as kapitangMassalanra } from './blog/kapitang-massalanra-panglima-perang-datu-lowa.mdx';

const url = 'https://kurnhy.my.id/blog';
const title = 'Blog – Kurniawan Alcantara';
const description =
  'Kumpulan tulisan dan artikel dengan topik yang luas dan update terhadap situasi dan peristiwa terkini';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
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
              Blog
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`Saya sejatinya telah menulis sejak 2017 dengan berbagai macam platform blogger tapi sudah tidak aktif, mudah-mudahan di situs personalku ini aku bisa serius mengurusnya. Saya telah menulis ${blogPosts.length} artikel di situs ini.
                Gunakan kolom pencarian dibawah untuk mencari topik yang anda suka.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Cari topik"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Contoh teknologi, filsafat, sains, politik"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Artikel Populer
              </Heading>
              <BlogPost {...kapitangMassalanra} />
            </Flex>
          )}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              Semua Tulisan
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
