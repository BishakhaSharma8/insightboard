import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.text}>
          👋 Hi, I'm <strong>Bishakha Sharma</strong> – a passionate Java Developer and MERN Full Stack Developer.
        </p>
        <p style={styles.text}>
          I love building efficient and scalable web applications. I have experience working with Java, Spring Boot, MongoDB, Express.js, React.js, and Node.js. Whether it's developing robust backend systems or creating beautiful frontends, I'm always excited to learn and create impactful solutions.
        </p>
        <p style={styles.text}>
          This project was developed as part of an internship with <strong>Tata Motors</strong>.
        </p>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#f8fafc",
    fontFamily: "'Segoe UI', sans-serif"
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "10px"
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "20px"
  }
};

export default About;
