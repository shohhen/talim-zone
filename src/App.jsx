import Courses from "./components/courses/Courses";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import TestimonialSlider from "./components/testimonials/Testimonials";
import "./styles/_main.scss";
import Statistics from "./components/statistics/Statistics";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/main-page/MainPage";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return (
    <>
     <Loader visible={loading} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
