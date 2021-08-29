/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import { Carousel } from 'react-responsive-carousel';
import { bannerData } from '../data/bannerData';
import styles from '../styles/Banner.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Banner() {
  function populateBanners(banner) {
    return (
      <div key={banner.id}>
        <img loading="lazy" src={banner.bannerUrl} alt="Banner" />

      </div>
    );
  }

  return (
    <div className={styles.BannerMainContainer}>

      {/* ********* Gradient********** */}
      <div className={styles.BannerGradient} />
      {/* ********* Gradient********** */}

      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4500}>
        {bannerData.map(populateBanners)}
      </Carousel>
    </div>
  );
}
