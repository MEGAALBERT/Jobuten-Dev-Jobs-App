import React from 'react';
import "../about.css";
const alberto = require("../images/Alberto.jpg");
const eri = require("../images/EriShimada.JPG");
const mat = require("../images/Mattia.JPG");
const phil = require("../images/Philippe.JPG")
const muk = require("../images/Mukthar.JPG")
const github = require("../images/github-logo.png")

export default function About() {

    return (
<div>
<div className="about-section">
  <h1 className="h1-about">We Are Jobu<span className="about-prim">Ten</span></h1>
  <h2>OUR MISSION</h2>
  <p>To provide for our clients and users the best option for <br/>finding the best dev jobs in Japan
      and around the world!<br/><br/>
      As well as to keep our clients up to date with <br/>the latest news about tech and the world !</p>
</div>

<h2 className="our-team">Our Team</h2>

<div className="row">

  <div className="column">
    <div className="card">
      <img src={eri} alt="Jane" className="about-img"/>
      <div className="container">
        <h2>Eri Shimada</h2>
        <p className="title">Fullstack Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <a href="https://github.com/Erismd" target="_blank"><button className="about-btn"><img src={github} alt="github-logo"/></button></a>
      </div>
    </div>
  </div>
 


  <div className="column">
    <div className="card">
      <img src={alberto} alt="Jane" className="about-img"/>
      <div className="container">
        <h2>Alberto Medellin</h2>
        <p className="title">Fullstack Developer & Tech lead</p>
        <p>Student at Code Chrysalis CC13.</p>
        <a href="https://github.com/MEGAALBERT" target="_blank"><button className="about-btn"><img src={github} alt="github-logo"/></button></a>
      </div>
    </div>
    </div>



 
  <div className="column">
    <div className="card">
      <img src={mat} alt="Mike" className="about-img"/>
      <div className="container">
        <h2>Mattia Marcenta</h2>
        <p className="title">Backend Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <a href="https://github.com/matt185" target="_blank"><button className="about-btn"><img src={github} alt="github-logo"/></button></a>
      </div>
    </div>
  </div>
  

  
  <div className="column">
    <div className="card">
      <img src={phil} alt="John" className="about-img"/>
      <div className="container">
        <h2>Philippe Huynh</h2>
        <p className="title">Frontend Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <a href="https://github.com/pw-yuu" target="_blank"><button className="about-btn"><img src={github} alt="github-logo"/></button></a>
      </div>
    </div>
  </div>



<div className="column">
    <div className="card">
      <img src={muk} alt="John"  className="about-img"/>
      <div className="container">
        <h2>Mukthar Otarbayev</h2>
        <p className="title">Backend Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <a href="https://github.com/MukhtarKaz" target="_blank"><button className="about-btn"><img src={github} alt="github-logo"/></button></a>
      </div>
    </div>
  </div>


</div>
</div>
    )
}

