import StingrayBackground from "./StingrayBackground";

export default function Contact() {
  return (
    <div className="sections" id="contact" style={{ position: "relative" }}>
      <StingrayBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Contact</h1>
        <p>I'm currently looking for 2027 opportunities! Get in touch with me through: </p>
        <div className="contact-links">
          <a href="mailto:wbella@student.ubc.ca"><i class="fa-regular fa-envelope"></i></a>
          <a href="https://github.com/bella7898"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/wbella101/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/bella-wang-878919231/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}