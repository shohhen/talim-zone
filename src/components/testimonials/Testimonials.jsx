import React, { useState } from "react";
import image from "/img/arrow-down.svg";
import image1 from "/img/arrow-up.svg";
import Fade from "react-reveal/Fade";
import "./testimonials.scss";

const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonial-slider main-wrapper main-component">
        <div className="slides">
          <p className="prev slide__btn" onClick={prevSlide}>
            <img src={image} alt="" />
          </p>
          {testimonials.map((testimonial, index) => (
            <>
            <div
              key={index}
              className={
                index === currentSlide
                  ? "slide active"
                  : index === currentSlide - 1 ||
                    (index === 0 && currentSlide === testimonials.length - 1)
                  ? "slide prev"
                  : "slide next"
              }
            >
              <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
              <h3>
                {testimonial.author}
              </h3>
              <p>{testimonial.text}</p>
            </div>
            </>
          ))}

          <p className="next slide__btn" onClick={nextSlide}>
            <img src={image1} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
