import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://kurnhy.my.id/profil';
const title = 'Profil - Kurniawan Alcantara';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
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
              Aboout Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Kurniawan, bagi saya itu nama yang sangat pasaran di Indonesia,
              meski hanya satu kata tapi maknanya mencerminkan semangat dan
              optimisme. Saya punya minat yang beragam, hampir 4 tahun bergelut
              di bidang teknologi dengan fokus saat ini pengembangan web dan
              aplikasi, ya itu suatu keharusan mengingat era digital yang
              menuntut kita bertekuk lutut terhadap kedigdayaannya. Selain itu
              juga aku hobi membaca buku, itu juga suatu keharusan karena
              literasi adalah roh dalam peradaban masyarakat, segala topik saya
              suka baca, tapi untuk fiksi dan puisi saya tidak berminat sama
              sekali. Yang paling saya suka adalah sumbangsih pemikiran tokoh
              terkenal dan karya ilmiah yang dibukukan. Tak lupa juga keharusan
              yang selanjutnya menulis, membaca tanpa menulis manusia bagaikan
              berjalan hanya dengan satu kaki, keduanya harus beriringan,
              mengungkapkan gagasan melalui tulisan adalah rutinitas calon
              intelektual, tanpa itu mereka sudah ditenggelamkan oleh sejarah.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Saya tumbuh dan di lahirkan di daerah kabupaten Wajo wilayah
              Sulawesi dan masih bertempat tinggal dan sekolah disini sejak
              kecil. Untuk saat ini, sementara menempuh studi di Fakultas
              Keguruan di Institut Agama Islam As'adiyah Sengkang. Aku seorang
              As'adiyyin tulen, hampir seluruh anggota keluargaku juga demikian.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Dalam hal pengembangan web dan aplikasi, aku boleh berbagi
              sedikit. Untuk saat ini, banyak sekali cara dan jalan dalam
              pengembangan web dan aplikasi. Akan tetapi, fundamentalnya tetap
              sama. Sehingga ada baiknya perlu dipelajari secara bertahap dan
              konsisten.
            </Text>
            <iframe
              height="280"
              src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
              title="My Travel Map"
              width="100%"
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
