import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.text}>
          👋 Hello! I'm <strong>Bishakha Sharma</strong>, a highly motivated <strong>Java Developer</strong> and <strong>MERN Stack Engineer</strong> with a passion for building scalable and user-centric web applications.
        </p>
        <p style={styles.text}>
          With hands-on experience in technologies like <strong>Java, Spring Boot, MongoDB, Express.js, React.js, and Node.js</strong>, I enjoy crafting intuitive front-end interfaces and architecting powerful back-end systems. My strength lies in transforming ideas into functional and aesthetic digital products.
        </p>
        <p style={styles.text}>
          This project was developed as part of an internship with <strong>Tata Motors</strong>, where I applied full-stack concepts in a real-world environment and collaborated to deliver impactful features.
        </p>
        <p style={styles.text}>
          Always eager to grow and innovate, I'm currently exploring advanced system design, DevOps, and cloud-native development to level up my full-stack capabilities.
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
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "20px",
  },
};

export default About;
