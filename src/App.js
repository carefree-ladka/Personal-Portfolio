import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [bars, setBars] = useState(false);
  const [ResumeData, SetResumeData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const HomeRef = React.useRef("");
  const SkillsRef = React.useRef("");
  const WorkRef = React.useRef("");
  const AboutRef = React.useRef("");
  const ContactRef = React.useRef("");

  /* useEffect(() => {
    ScrollOut({
      targets: "h3,p,a,span"
    });
  }); */

  useEffect(() => {
    (async () => {
      const res = await fetch("./Resume.json");
      const data = await res.json();
      SetResumeData(data);
      console.log(data);
      SetLoading(false);
    })();
  }, []);
  const toggleClick = () => {
    setBars(!bars);
  };
  const toggleClickClose = () => {
    setBars(false);
  };
  const onClickHomeLink = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickEducationLink = () => {
    SkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickWorkLink = () => {
    WorkRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickAboutLink = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickContactLink = () => {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const props = {
    onClickHomeLink,
    onClickEducationLink,
    onClickWorkLink,
    onClickAboutLink,
    onClickContactLink,
    toggleClick,
    bars,
    toggleClickClose,
    setBars
  };

  if (loading)
    return (
      <div className="app-spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  return (
    <>
      <Menu {...props} />

      <div className="content">
        <Home
          ref={HomeRef}
          onClickWorkLink={onClickWorkLink}
          onClickContactLink={onClickContactLink}
          ResumeData={ResumeData}
        />
        <About ref={AboutRef} />
        <Skills ref={SkillsRef} />
        <Portfolio ref={WorkRef} />
        <Contact ref={ContactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
