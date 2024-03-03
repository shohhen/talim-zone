import { useState, useEffect } from "react";
import "./hero.scss";
import image from "/img/heroimg.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Link} from "react-router-dom";

const Hero = () => {
  const texts = [
    "Your journey to Child Education starts here",
    "Unlock your future with Expert Guidance",
    "Chart your path to success with our community",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        if (letterIndex <= texts[index].length) {
          setDisplayedText(texts[index].substring(0, letterIndex));
          setLetterIndex(letterIndex + 1);
        } else {
          setForward(false);
          setTimeout(() => {
            setForward(false);
          }, 3000); // Pause for 3 seconds before reversing
        }
      } else {
        if (letterIndex >= 0) {
          setDisplayedText(texts[index].substring(0, letterIndex));
          setLetterIndex(letterIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % texts.length);
        }
      }
    }, 80); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
  }, [forward, index, letterIndex, texts]);

  return (
    <div className="main-wrapper" id="hero">
      <div className="hero main-component">
        <div className="hero__text">
          <div className="hero_bg"></div>
          <h2>TalimZone</h2>
          <div className="text-container">
            <span className="displayed-text">{displayedText}</span>
          </div>
          <div className="hero__text-button">
            <AnchorLink href="#contact">Start Learning</AnchorLink>
            <Link to="https://talim-zone-market.vercel.app/">Explore Courses</Link>
          </div>
        </div>
        <div className="hero__img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
