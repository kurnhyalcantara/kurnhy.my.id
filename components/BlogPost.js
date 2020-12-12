import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import { parseISO, format as formatDate } from 'date-fns';
import format from 'comma-number';
import { FiBookmark } from 'react-icons/fi';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  PseudoBox
} from '@chakra-ui/core';

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
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.500'
  };
  const fillColor = {
    light: 'white',
    dark: 'gray.900'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none', shadow: 'lg' }}>
        <Box
          width="100%"
          padding={6}
          mb={6}
          bg={bgColor[colorMode]}
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
          position="relative"
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
            <Text color="gray.500" minWidth="105px" mb={[4, 2]}>
              {formatDate(parseISO(publishedAt), 'dd MMMM, yyyy')}
              <>
                &nbsp;•&nbsp;
                {`${views ? format(views) : '–––'} kali dibaca`}
              </>
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
          <Box
            as={FiBookmark}
            size={6}
            role="img"
            position="absolute"
            color={iconColor[colorMode]}
            fill={fillColor[colorMode]}
            right={2}
            top={-8}
          />
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
