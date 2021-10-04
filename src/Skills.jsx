import React, { forwardRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default forwardRef(({ props }, ref) => {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal(".heading", { delay: 300 });
      ScrollReveal().reveal(".skills__name", { delay: 150 });
      ScrollReveal().reveal(".scontainer", { interval: 200 });
    }
  });
  return (
    <main ref={ref}>
      <section>
        <h3 className="skills__heading">Skills</h3>
        <p className="skills__name">HTML</p>
        <div className="scontainer">
          <div className="skills html" />
        </div>

        <p className="skills__name">CSS</p>
        <div className="scontainer">
          <div className="skills css" />
        </div>

        <p className="skills__name">JavaScript</p>
        <div className="scontainer">
          <div className="skills js" />
        </div>

        <p className="skills__name">React.js</p>
        <div className="scontainer">
          <div className="skills react" />
        </div>
        <p className="skills__name">Next.js</p>
        <div className="scontainer">
          <div className="skills next" />
        </div>
        <p className="skills__name">Redux</p>
        <div className="scontainer">
          <div className="skills redux" />
        </div>
      </section>
    </main>
  );
});
