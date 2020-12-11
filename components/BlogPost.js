import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import { parseISO, format as formatDate } from 'date-fns';
import format from 'comma-number';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const { title, summary, publishedAt } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const bgColor = {
    light: 'white',
    dark: 'gray.700'
  };
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link _hover={{ textDecoration: 'none', shadow: 'lg' }}>
        <Box
          width="100%"
          padding={6}
          bg={bgColor[colorMode]}
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
        >
          <Heading size="md" as="h3" mb={1} fontWeight="medium">
            {title}
          </Heading>
          <Flex
            width="100%"
            align="flex-start"
            flexWrap="wrap"
            flexDirection={['column', 'row']}
          >
            <Text color="gray.500" minWidth="105px" mb={[2, 4]}>
              {formatDate(parseISO(publishedAt), 'dd MMMM, yyyy')}
              <>
                &nbsp;•&nbsp;
                {`${views ? format(views) : '–––'} kali dilihat`}
              </>
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
