import React from 'react'
import ImgCarousel from 'react-img-carousel'
import 'react-img-carousel/lib/carousel.css'
import './carousel.scss'
import carousel1 from '../assets/carousel/carousel-1.jpg'
import carousel2 from '../assets/carousel/carousel-2.jpg'
import carousel3 from '../assets/carousel/carousel-3.jpg'
import carousel4 from '../assets/carousel/carousel-4.jpg'
import carousel5 from '../assets/carousel/carousel-5.jpg'
import carousel6 from '../assets/carousel/carousel-6.jpg'
import carousel7 from '../assets/carousel/carousel-7.jpg'
import carousel8 from '../assets/carousel/carousel-8.jpg'

export function Carousel() {
  const props = {
    arrows: false,
    dots: false,
    autoplay: true,
    cellPadding: 40,
    autoplaySpeed: 1000,
    transitionDuration: 3000,
    lazyLoad: true,
    imagesToPrefetch: 3
  }

  return (
    <ImgCarousel {...props} style={{
      slide: {
        opacity: 1
      }}}>
      <img src={carousel1} alt="mask"/>
      <img src={carousel2} alt="massage"/>
      <img src={carousel3} alt="mortero"/>
      <img src={carousel4} alt="gemstones"/>
      <img src={carousel5} alt="yoga"/>
      <img src={carousel6} alt="bruma"/>
      <img src={carousel7} alt="nails spa"/>
      <img src={carousel8} alt="essential oils"/>
    </ImgCarousel>
  )
}