import "./features.scss";

const Features = () => {
  const features = [
    {
      id: "1",
      img: "/img/discussion.png",
      title: "mentors",
      content: "From various parts of the world",
    },
    {
      id: "2",
      img: "/img/computer-laptop.svg",
      title: "All Online",
      content: "Seamless Savings in Time",
    },
    { 
      id: "3",
      img: "/img/veteran-medal.svg",
      title: "Quality Courses",
      content: "Unparalleled Course Quality",
    },
    {
      id: "4",
      img: "/img/diamond.png",
      title: "All-inclusive",
      content: "Covers all application componenets",
    },
  ];

  return (
    <div className=" features main-component" id="features">
      <div className="main-wrapper">
        {features.map((feature) => (
          <div key={feature.id} className="features__single">
            <img src={feature.img} alt="" />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
