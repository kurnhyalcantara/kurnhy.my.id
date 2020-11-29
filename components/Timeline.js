import React, { useState } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Icon,
  Stack,
  Divider
} from '@chakra-ui/core';

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2016
    </Heading>
    <List>
      <TimelineStep title="Menjelajahi Lebih Jauh ke Dasar Sistem">
        Aku merasa seperti penjelajahan tanpa batas, seakan aku menguasai
        jaringan mesin digital di pc ku, suatu ketika aku mencoba memodifikasi
        file installer sebuah game, hasilnya luar biasa aku bisa melakukan
        apapun yang aku mau terhadap game itu, Awesome.
      </TimelineStep>
      <TimelineStep title="Mencoba membuat program sendiri">
        Penjelajahan ini mestinya ditopang dengan pemahaman dasar tentang logika
        pemrograman, itu yang terpenting disamping masalah visualisasinya. Saat
        aku membuat program crack aktivasi Windows 8, aku masih menggunakan API
        aplikasi lain yaitu AutoPlay. Aku tidak mempublikasikannya di internet,
        ini hanya untuk lingkungan pribadi saja
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Eksplorasi Dunia Desain Grafis 🎓">
        Pertama kali mempelajari dan mencoba menguasai dasar-dasar dunia desain
        grafis, yaa meskipun hasilnya agak murahan. Aplikasi pertama yang saya
        pelajari adalah Photoshop, agak rumit tapi seru.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2014
    </Heading>
    <List>
      <TimelineStep title="Lulus SMP 🔥">
        Banyak hal yang aku rindukan saat itu.
      </TimelineStep>
      <TimelineStep title="Masuk Pesantren">
        Terkadang perlu waktu dan wadah yang tepat untuk dapat merubah pandangan
        hidupmu. Lingkungan seperti ini menjadi keberkahan besar buat hidup saya
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2013
    </Heading>
    <List>
      <TimelineStep title="Laptop Pribadi Pertama">
        Saya ingat laptop itu masih sesuai dengan spesifikasi zaman itu, Pentium
        Dual Core dan RAM 2 GB, saya rasa cukup untuk mengeksplorasi dunia IT
        saat itu, merasa sulit berpisah dengannya meski 1 hari saja, sudah
        seperti pacar pertama ku saja :v.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2011
    </Heading>
    <List>
      <TimelineStep title="Lulus Sekolah Dasar">
        Aku benar-benar beruntung bisa lulus dengan predikat terbaik.
      </TimelineStep>
      <TimelineStep title="Berkenalan dengan Dunia Komputer❤️">
        Suatu saat, aku masuk di perpustakaan, dan meminjam sebuah buku motivasi
        kisah hidup Bill Gates, benar-benar mampu memicu semangatku dalam
        teknologi digital. Kemudian aku mencari buku tentang persoalan teknis
        komputer keesokan harinya. Aku masih menggeluti teori nya untuk
        sementara.
      </TimelineStep>
      <TimelineStep title="Masuk SMP">
        Terlalu banyak yang berubah terutama di dalam diri sendiri, personal
        yang benar-benar liar
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2005
    </Heading>
    <List>
      <TimelineStep title="Masuk Sekolah Dasar (SD)">
        Periode terpanjang dalam tahap pendidikan di Indonesia, 6 tahun, ada
        banyak perubahan baik psikologis, emosional, dan intelektual yang saya
        alami dalam periode itu.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2003
    </Heading>
    <List>
      <TimelineStep title="Masuk TK">
        Pertama kali saya mengenal dunia pendidikan, sedikit aneh tapi saya
        menikmatinya.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1999
    </Heading>
    <List>
      <TimelineStep title="Lahir, 12 Maret 👶🏼🍼" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
        Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2020
      </Heading>
      <List>
        <TimelineStep title="Projek HMI As'adiyah Web App">
          Dengan menggunakan framework website HMI Cabang Wajo, saya coba
          menerapkannya ke HMI Komisariat As'adiyah dengan tingkatan yang lebih
          tinggi yaitu Web App, dengan fitur PWA nya dan fitur pendukung
          lainnya. Anda bisa cek di hmi-asadiyah.web.app
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Berkenalan dengan Dunia Literasi">
          Aku memang pembaca buku sedari kecil, tapi fokus utamaku hanya
          buku-buku sejarah dan ensiklopedi. Tapi setelah masuk dunia kampus
          diperlukan wawasan yang benar-benar mendalam sampai keakar-akarnya,
          dari situlah berkenalan dengan buku filsafat, epistemologi, dan
          pemikiran tokoh-tokoh terkenal. Hal itu sangat membantuku untuk
          menjadi seorang akademisi sejati.
        </TimelineStep>
        <TimelineStep title="Menjadi kader HMI💯">
          Mengikuti pengkaderan di HMI (Himpunan Mahasiswa Islam) adalah bagian
          pemrosesan diriku untuk bertransofarmasi menjadi insan akademis dan
          idealis. Tak ada satupun wadah yang mampu merubahku dalam hal
          idealisme selain HMI.
        </TimelineStep>
        <TimelineStep title="Projek Website HMI Cabang Wajo">
          Saat itu saya diminta oleh Ketua HMI Cabang Wajo untuk membuat website
          HMI Cabang Wajo. Saya pun mengindahkan, tapi diperlukan dana yang
          tidak sedikit, apalagi saat itu masa awal periodenya. Akhirnya saya
          mencari cara agar menciptakan sebuah website gratis tapi tidak
          terkesan murahan dan menggunakan top domain, dan akhirnya saya
          berkenalan dengan NodeJS dan dipadukan dengan Firebase. Terciptalah
          hmiwajo.web.app
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2018
      </Heading>
      <List>
        <TimelineStep title="Berkenalan dengan Android Development">
          Awalnya aku tergiur dengan beberapa developer aplikasi yang bisa dapat
          gaji bulanan dari google, jadi saya pun berusaha mempelajari hal itu
          juga. Awalnya sangat-sangat beresiko karena spesifikasi laptopku
          sangat rendah untuk menjalankan IDE sekelas Android Studio, tapi saya
          paksakan saja, dan hasilnya kalian tau sendirilah :(.
        </TimelineStep>
        <TimelineStep title="Mempelajari Bahasa Pemrograman Java 💯">
          Hal yang paling penting dalam pemrograman android adalah menguasai
          bahasa pemrograman java. Ini adalah bahasa pemrograman tersulit
          menurut saya meskipun sudah dilengkapi dengan dokumentasi sekalipun,
          yang membuatnya sulit adalah alur logika dan algoritmnya yang
          berbelit-belit dan ruwet.
        </TimelineStep>
        <TimelineStep title="Projek pertama aplikasi android ku 🏆">
          Dalam projek ini saya bertindak sebagai satu-satunya orang
          mengerjakan, aku bertindak sebagai projek manager, software engineer,
          front-end visualitazion, tapi saya sangat menikmatinya. Saya sudah
          mengirim undangan ke beberapa teman untuk bergabung di projek ini tapi
          tidak ada yang merespon. Aplikasi ini bernama BugisMart, semacam
          marketplace yang sepertinya ide ini sudah di take over oleh aplikasi
          yang bernama Labaco.
        </TimelineStep>
        <TimelineStep title="Masuk kampus 🥳">
          Aku masuk di Fakultas Keguruan Institut Agama Islam As'adiyah
          Sengkang, aku sebenarnya kurang paham apa maksud dan tujuan ku masuk
          di fakultas. Tapi aku benar-benar paham dan meresapi makna dan tujuan
          sebenarnya dari dunia kampus setelah aku masuk di HMI (Himpunan
          Mahasiswa Islam).
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2017
      </Heading>
      <List>
        <TimelineStep title="Membuat Skinpack sendiri ✨">
          Periode ini kira-kira menjelang saya lulus dari pesantren, saya
          mencoba mengkreasikan skinpack sendiri, sebuah tema full bundling
          untuk windows. Saya mampu memberikan fitur lengkap untuk program itu,
          Awesome.
        </TimelineStep>
        <TimelineStep title="Lulus dari Pesantren ⚛️">
          Ada banyak teman dan pengalaman luar biasa yang bisa saya dapatkan
          dari sana, dan yang terpenting dari segalanya adalah kesempatan untuk
          mendapatkan ilmu dari alim ulama.
        </TimelineStep>
        <TimelineStep title="Terobsesi menjadi hacker 🏡">
          Yaa pastinya lah orang yang menghabiskan waktu hampir 6 jam sehari
          didepan komputer kemungkinan akan terobsesi seperti itu, aku mengatur
          waktuku didepan komputer mulai jam 7 malam hingga jam 1. Setidaknya
          ada beberapa film yang membuatku terobsesi, yaitu Whoami, Mr Robot,
          Bloody Monday, The Technicians.
        </TimelineStep>
        <TimelineStep title="Berkenalan dengan Kali Linux 🏡">
          Jadi salah satu OS terbaik buat penetration testing dan berada di
          lingkungan linux adalah Kali Linux OS. Sebenarnya saya belum terlalu
          mendalami fundamental linux operating system, tapi setelah saya
          menyelaminya cukup lama saya sudah terbiasa, meskipun hanya satu
          bahasa pemrogramannya yang benar-benar saya kuasai yaitu Shell.
        </TimelineStep>
        <TimelineStep title="Berkenalan dengan Cryptocurrency 💍">
          Saat itu tanggal 28 Juli 2017, malamnya aku menghabiskan semalaman
          youtuban, saat itu aku melihat video dan sekaligus mengenalkanku
          dengan dunia cryptocurrency (bitcoin), awalnya aku ragu apakah ini
          mirip MLM atau tidak, tapi setelah memahaminya lebih dalam saya
          menganggap wow teknologi ini akan menjadi teknologi yang menjanjikan
          di masa depan, sekaligus investasi yang bagus untuk saya, bayangkan
          saja harga 1 bitcon harganya melonjak hingga 930% dalam 2 bulan,
          sampai-sampai aku mengoleksi 3 jt saat itu dimana saya pertama kali
          investasi 100 ribu. Awesome.
        </TimelineStep>
        <TimelineStep title="Pemburu Faucet dan Situs Mining Bitcoin">
          Saat bitcoin menjadi trend saat itu, banyak situs mining dan situs
          bagi bitcoin gratis atau istilahnya faucet bertebaran di internet, yaa
          aku bahkan menghabiskan semalaman suntuk sebagai pemburu faucet itu,
          sebut sajalah situs freebitco.in, bitcofarm, eobot. Bagusnya sih jika
          memang benar2 tekun kita harus mengakomodasi uang tidak sedikit untuk
          beli superkomputer dengan spesifikasi tinggi supaya berpenghasilan
          lebih cepat.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          rightIcon="chevron-down"
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
