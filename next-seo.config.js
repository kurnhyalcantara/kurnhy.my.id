const title = 'Kurniawan Alcantara – Techie Hobbyst dan Penulis.';
const description = 'Developer, Penyuka Matematika, dan membaca buku';

const SEO = {
  title,
  description,
  canonical: 'https://kurnhy.my.id',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kurnhy.my.id',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
