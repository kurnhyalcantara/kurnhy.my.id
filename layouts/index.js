import React from 'react';
import useSWR from 'swr';
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import BlogSeo from '../components/BlogSeo';

const editUrl = (slug) =>
  `https://github.com/kurnhyalcantara/my-personal-blog/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://kurnhy.my.id/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={`https://kurnhy.my.id/blog/${slug}`} {...frontMatter} />
      <Stack
        as="article"
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
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Kurniawan Alcantara"
                src="https://firebasestorage.googleapis.com/v0/b/kurnhy-blog.appspot.com/o/1.jpg?alt=media&token=2d4406d8-a304-4e66-98fb-14c4eea40890"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {'Kurniawan Alcantara / '}
                {format(parseISO(frontMatter.publishedAt), 'dd MMMM, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
              {` • `}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Subscribe />
        <Box>
          <Link href={discussUrl(slug)} isExternal>
            {'Discuss on Twitter'}
          </Link>
          {` • `}
          <Link href={editUrl(slug)} isExternal>
            {'Edit on GitHub'}
          </Link>
        </Box>
        <IframeResizer
          checkOrigin={false}
          title="Komentar"
          src={`https://fastfeedback.io/embed/BLspD6y8Bfn73LLm7nvW/${slug}?theme=${colorMode}`}
          style={{
            width: '1px',
            minWidth: '100%'
          }}
        />
      </Stack>
    </Container>
  );
}
