import "./statistics.scss";
import { useEffect, useState } from "react";

const Statistics = ({ finalNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < finalNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count, finalNumber]);
  return (
    <div className=" statistics main-component" id="statistics">
      <div className="statistics__block main-wrapper">
        <div className="statistics__block-info">
          <div className="statistics__single">
            <h3>+5</h3>
            <p>countries applying beyond US universities.</p>
          </div>
          <div className="statistics__single">
            <h3>+130</h3>
            <p>students</p>
          </div>
          <div className="statistics__single">
            <h3>Expert </h3>
            <p>instructors</p>
          </div>
        </div>
        <div className="statistics__block-text">
          <h2>Elevate Your Application With Admissions Counselling</h2>
          <div>
            <h3>Our team members: </h3>
            <div className="team__members">
              <div className="team__member-single">
                <h3>Kabeer Lakhani</h3>
                <ul>
                  <li>~ University of Toronto </li>
                  <li>~ Princeton University </li>
                  <li>~ Johns Hopkins University </li>
                  <li>~ Edinburgh University </li>
                  <li>~ Birmingham University </li>
                  <li>~ London School of Economics </li>
                </ul>
              </div>
              <div className="team__member-single">
                <h3>Abdulloh Erkinov</h3>
                <ul>
                  <li>~ University of Toronto</li>
                  <li>~ University of Southampton </li>
                  <li>~ Luiss International University </li>
                  <li>~ Amsterdam Tech University </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>Dedicated Mentors :</h3>
            <p>
              Our Admissions Counseling service is powered by a dedicated team
              of experienced professionals, committed to providing personalized
              guidance and unwavering support as they navigate the complexities
              of the college admissions journey with our clients.
            </p>
          </div>
          <div>
            <h3>Diverse course catalog:</h3>
            <p>
              Admissions Counseling offers a diverse range of courses covering
              various subjects and industries, ensuring that you can find the
              perfect course to meet your learning goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
