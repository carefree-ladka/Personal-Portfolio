import React, { forwardRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default forwardRef(({ props }, ref) => {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal(".heading", { delay: 200 });
      ScrollReveal().reveal(".work__card", { delay: 300 });
      ScrollReveal().reveal(".proj1", { delay: 350 });
      ScrollReveal().reveal(".proj2", { delay: 450 });
      ScrollReveal().reveal(".proj3", { delay: 550 });
    }
  });
  return (
    <main ref={ref} className="work">
      <h3 className="work__heading">Work</h3>
      <section>
        <div className="work__wrapper">
          <div className="work__card">
            <div className="card proj1">
              <a href="https://s64kn.csb.app/">
                <img src="/images/project1.PNG" alt="Personal portfolio" />
              </a>
              <div className="work__img-header">Personal Portfolio</div>
            </div>
          </div>
          <div className="work__card">
            <div className="card proj2">
              <a href="https://ssgnb.csb.app/">
                <img src="/images/React Airline.PNG" alt="React Airline" />
              </a>
              <div className="work__img-header">React Airline PWA</div>
            </div>
          </div>
          <div className="work__card">
            <div className="card proj3">
              <a href="https://fwk8w.csb.app/">
                <img src="/images/ResponsiveCV.PNG" alt="Responsive CV" />
              </a>
              <div className="work__img-header">Responsive CV</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});
