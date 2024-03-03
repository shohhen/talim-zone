import "./faq.scss";
import React, { useState } from "react";
import image from "/img/arrow-down.svg";

const Faq = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div className="" key={index}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          
          <h3>{item.title}</h3>
          <img
            src={image}
            className="dropdown icon"
            onClick={() => onTitleClick(index)}
          />
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="faq" className="main-wrapper">
      <div className="ui styled accordion main-component">

      <h2>FAQ</h2>
        {renderedItems}
        </div>
    </div>
  );
};

export default Faq;
