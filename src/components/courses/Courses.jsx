import "./courses.scss";
import CustomModal from "../modal/Modal";
import { useState, useEffect } from "react";

const Courses = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleOpenModal = (modalId) => {
    setSelectedBlock(modalId);
  };

  const handleCloseModal = () => {
    setSelectedBlock(null);
  };

  const blocks = [
    {
      id: 1,
      img: "/img/graduation-cap.png",
      name: "Admissions course (Basic plan)",
    },
    {
      id: 2,
      img: "/img/book.png",
      name: "Admissions course (Standard Plan )",
    },
    {
      id: 3,
      img: "/img/library.png",
      name: "Admissions course ( Full support)",
    },
    {
      id: 4,
      img: "/img/camping-tent.png",
      name: "Bootcamp (UofT & UBC)",
    },
    {
      id: 5,
      img: "/img/tripadvisor.png",
      name: "DET (Standard Plan)",
    },
    {
      id: 6,
      img: "/img/tripadvisor.png",
      name: "DET (Individual Training)",
    },
    {
      id: 7,
      img: "/img/passport.png",
      name: "Canadian Visa Application",
    },
    { id: 8, img: "/img/lab-flask.svg", name: "Soon" },
    // Add more blocks as needed
  ];

  const modals = [
    {
      id: 1,
      name: "Admissions course (Basic plan)",
      title: "Services",
      title3: "Price : 99$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy)",
        "Document samples",
        "Application Materials",
        "Filling out Common App",
        "Filling out CSS profile ",
        "Applying to Turkiye Burslari scholarship",
        " Applying to United States ",
        " Recommendation letters ",
      ],
    },
    {
      id: 2,
      name: "Admissions course (Standard plan)",
      title: "Services",
      title3: "Price : 169$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy), Document samples",
        "Application Materials, Filling out Common App",
        "Filling out CSS profile, Applying to Turkiye Burslari scholarship",
        " Applying to United States, Recommendation letters ",
        "Extracurriculars and Honors, Sending your Test Scores (IELTS&SAT) ",
        "Applying to UofT, Essay check ",
        "Writing supplemental essays, Reading mentors supplemental essays",
        "Applying to universities in England, International student talks",
      ],
    },
    {
      id: 3,
      name: "Full support",
      title: "Services",
      title3: "Price : 519$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy), Document samples",
        "Application Materials, Filling out Common App",
        "Filling out CSS profile, Applying to Turkiye Burslari scholarship",
        " Applying to United States, Recommendation letters ",
        "Extracurriculars and Honors, Sending your Test Scores (IELTS&SAT) ",
        "Applying to UofT, Essay check ",
        "Writing supplemental essays, Reading mentors supplemental essays",
        "Applying to universities in England, International student talks",
        "24/7 availability, Counselor account support",
        "Recommendation letter from mentors, Applying to Lester B Pearson scholarship ",
        "Visa Support",
      ],
    },
    {
      id: 4,
      name: "Admissions course (Basic plan)",
      title: "Services",
      title3: "Price : 99$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy)",
        "Document samples",
        "Application Materials",
        "Filling out Common App",
        "Filling out CSS profile ",
        "Applying to Turkiye Burslari scholarship",
        " Applying to United States ",
        " Recommendation letters ",
      ],
    },
    {
      id: 5,
      name: "DET (Standard Plan)",
      title: "Services",
      title3: "Price : 21$",
      title2: `Mentors : Abdulloh Erkinov (DET score 135)
        Zufarbek Muxtorov (DET score 130)`,
      content: [
        "Introductory live lesson",
        "14 video lessons",
        "3 live lessons",
        "Practice tests",
        "Useful articles",
        "DET vocabulary",
        "PDF handouts",
      ],
    },
    {
      id: 6,
      name: "DET (Individual Training",
      title: "Services",
      title3: "Price : 50$",
      title2: `Mentors : Abdulloh Erkinov (DET score 135)
      Zufarbek Muxtorov (DET score 130)`,
      content: [
        "Introductory live lesson",
        "14 video lessons",
        "3 live lessons",
        "Practice tests",
        "Useful articles",
        "DET vocabulary",
        "PDF handouts",
        "6 Individual Lessons",
      ],
    },
    {
      id: 7,
      name: "Admissions course (Basic plan)",
      title: "Services",
      title3: "Price : 99$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy)",
        "Document samples",
        "Application Materials",
        "Filling out Common App",
        "Filling out CSS profile ",
        "Applying to Turkiye Burslari scholarship",
        " Applying to United States ",
        " Recommendation letters ",
      ],
    },
    {
      id: 8,
      name: "Admissions course (Basic plan)",
      title: "Services",
      title3: "Price : 99$",
      title2:
        "Mentors : Abdulloh Erkinov (University of Toronto), Kabeer Lakhani  (University of Toronto, Princeton, Johns Hopkins)",
      content: [
        "Recorded lessons (College essay guy)",
        "Document samples",
        "Application Materials",
        "Filling out Common App",
        "Filling out CSS profile ",
        "Applying to Turkiye Burslari scholarship",
        " Applying to United States ",
        " Recommendation letters ",
      ],
    },
    // Match modal IDs with block IDs or customize as needed
  ];

  const renderModals = () => {
    return modals.map((modal, index) => (
      <CustomModal
        key={modal.id}
        isOpen={selectedBlock === modal.id}
        onClose={handleCloseModal}
      >
        <h2>{modal.name}</h2>
        <h3>{modal.title}</h3>
        <ul>
          {modal.content.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <h3>{modal.title2}</h3>
        <h3>{modal.title3}</h3>
      </CustomModal>
    ));
  };

  return (
    <div className=" courses main-wrapper" id="courses">
      <div className="main-component">
        <h2>Explore Courses With Precision</h2>
        <div className="courses__list">
          {blocks.map((block) => (
            <div
              className="courses__list-single"
              key={block.id}
              onClick={() => handleOpenModal(block.id)}
            >
              <img src={block.img} alt="" />
              <p>{block.name}</p>
            </div>
          ))}
          {renderModals()}
        </div>
      </div>
    </div>
  );
};

export default Courses;
