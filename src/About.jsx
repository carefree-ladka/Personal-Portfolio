import React, { forwardRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default forwardRef(({ props }, ref) => {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal(".about__heading", { delay: 800 });
      ScrollReveal().reveal(".about__content", { delay: 1000 });
    }
  });
  return (
    <main ref={ref} className="about">
      <h3 className="about__heading">My Biography</h3>
      <section className="about__content">
        <p>
          I'm a web developer with over 2 years of experience doing work on
          HTML, CSS and JavaScript. I love spending my time with new
          technologies and React.js stuff. I mainly work with React.js and
          Next.js.
        </p>
      </section>
    </main>
  );
});
