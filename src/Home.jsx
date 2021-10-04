import React, { forwardRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default forwardRef(({ onClickWorkLink, ResumeData }, ref) => {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal(".home .home__into-body", { delay: 100 });
      ScrollReveal().reveal(".name", { delay: 300 });
      ScrollReveal().reveal(".home__field", { delay: 500 });
      ScrollReveal().reveal(".home__btns", { delay: 700 });
    }
  });

  return (
    <main ref={ref}>
      <section className="home">
        <div className="home__img">
          <img src="/images/Pawan.png" alt="Pawan.png" />
        </div>
        <div className="home__me">
          <span className="home__into-body">
            <strong>Hi, I am</strong> <br />
          </span>

          <span>
            <strong className="name">Pawan Kumar</strong>
          </span>
          <br />
          <span className="home__field">Frontend Developer</span>

          <br />
          <div className="home__btns">
            <li className="home__hire-btn">
              <a href="/images/Pawan's resume.pdf">Download CV</a>
            </li>
            <li className="home__Work-btn" onClick={onClickWorkLink}>
              Work
            </li>
          </div>
        </div>
      </section>
    </main>
  );
});
