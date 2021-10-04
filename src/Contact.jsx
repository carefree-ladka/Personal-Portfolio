import React, { forwardRef, useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default forwardRef(({ props }, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)")) {
      ScrollReveal().reveal(".contact__heading", { delay: 100 });
      ScrollReveal().reveal(".contactInfo", { delay: 200 });
      ScrollReveal().reveal(".box", { delay: 300 });
      ScrollReveal().reveal(".icon", { delay: 350 });
      ScrollReveal().reveal(".text", { delay: 400 });
      ScrollReveal().reveal(".contactForm", { delay: 450 });
      ScrollReveal().reveal(".inputBox", { delay: 500 });
    }
  });
  const sendMsg = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/vermapawan087@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    alert(" Your message has been sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main ref={ref}>
      <h3 className="contact__heading">Contact Me</h3>
      <section className="contact">
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Lucknow</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>798 153 2410 </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>Vermapawan087@gmail.com </p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  required={true}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span>Message</span>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  name="Send"
                  value="Send Message"
                  onClick={sendMsg}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
});
