import { useEffect, useRef, useState } from "react";
export default (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <header>
      <nav>
        <div className="toggle">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={props.toggleClick}
          />
        </div>

        <ul className={props.bars ? "active" : ""}>
          <li className="logo">
            <span>
              <strong>Pawan</strong>
            </span>
          </li>
          <li className="nav__times">
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => props.setBars(false)}
            />
          </li>
          <li onClick={props.onClickAboutLink}>
            <a className="menu__links-link" onClick={props.toggleClickClose}>
              About
            </a>
          </li>
          <li onClick={props.onClickEducationLink}>
            <a className="menu__links-link" onClick={props.toggleClickClose}>
              Skills
            </a>
          </li>
          <li onClick={props.onClickWorkLink}>
            <a className="menu__links-link" onClick={props.toggleClickClose}>
              Portfolio
            </a>
          </li>
          <li onClick={props.onClickContactLink}>
            <a className="menu__links-link" onClick={props.toggleClickClose}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/*  <div className="menu__progress-container">
        <div className="menu__progress-bar" style={{ width: `${scroll}%` }} />
      </div> */}
    </header>
  );
};
