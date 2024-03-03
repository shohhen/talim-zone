import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss'; // Import your CSS file for custom styles

const images = [
  { id: 1, src: '/img/NYU_Shanghai_Logo.jpg', alt: 'Image 1' },
  { id: 2, src: '/img/NYU.png', alt: 'Image 2' },
  { id: 3, src: '/img/NU-Q.jpg', alt: 'Image 3' },
  { id: 4, src: '/img/lynn.png', alt: 'Image 4' },
  { id: 5, src: '/img/MSU.jpeg', alt: 'Image 1' },
  { id: 6, src: '/img/kozel.png', alt: 'Image 2' },
  { id: 7, src: '/img/IState.png', alt: 'Image 3' },
  { id: 8, src: '/img/dePaul.png', alt: 'Image 4' },
  { id: 9, src: '/img/Dog.png', alt: 'Image 4' },
  { id: 10, src: '/img/Drexel.png', alt: 'Image 4' },
  // Add more image objects as needed
];

const InfiniteCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
        <h2 className='carousel-title'>Results</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div className='carousel-bg' key={image.id}>
            <img className="carousel-image" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
