import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default () => {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal("footer", { delay: 400 });
      ScrollReveal().reveal(".f_icon", { interval: 200 });
      ScrollReveal().reveal(".footer__fig", { duration: 600 });
    }
  });
  return (
    <footer>
      <div className="f_box">
        <div className="f_icon">
          <a href="linkedin.com/carefree_ladka" className="fa fa-linkedin">
            {" "}
          </a>
        </div>
      </div>
      <div className="f_box">
        <div className="f_icon">
          <a href="twitter.com/carefree_ladka" className="fa fa-twitter">
            {" "}
          </a>
        </div>
      </div>
      <div className="f_box">
        <div className="f_icon">
          <a href="instagram.com/carefree_ladka" className="fa fa-instagram">
            {" "}
          </a>
        </div>
      </div>
      <div className="f_box">
        <div className="f_icon">
          <a href="github.com/carefree_ladka" className="fa fa-github">
            {" "}
          </a>
        </div>
      </div>
      <div className="scrollUp">
        <i
          className="fa fa-chevron-circle-up"
          aria-hidden="true"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            })
          }
        />
      </div>
      <div className="footer__fig">
        <p>
          &copy;
          <a
            aria-label="Other Website"
            href="https://s64kn.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pawan Kumar&nbsp;
          </a>
          {new Date().getFullYear()}. Made with{" "}
          <span className="footer__heart">♥</span>️ and chai. View{" "}
          <a
            href="https://s64kn.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
