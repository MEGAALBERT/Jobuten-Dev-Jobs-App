import React from 'react';
import "../about.css";
const alberto = require("../images/Alberto.jpg");
const eri = require("../images/EriShimada.JPG");
const mat = require("../images/Mattia.JPG");
const phil = require("../images/Philippe.JPG")
const muk = require("../images/Mukthar.JPG")

export default function About() {

    return (
<div>
<div className="about-section">
  <h1>We Are JobuTen</h1>
  <h2>OUR MISSION</h2>
  <p>To provide for our clients and users the best option for finding the best dev jobs in Japan<br/>
      and around the world!<br/>
      As well as to keep our clients up to date with the latest news about tech and the world !.</p>
</div>

<h2 >Our Team</h2>

<div className="row">

  <div className="column">
    <div className="card">
      <img src={eri} alt="Jane" className="about-img"/>
      <div className="container">
        <h2>Eri Shimada</h2>
        <p className="title">FrontEnd Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <p>https://github.com/Erismd</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
 


  <div className="column">
    <div className="card">
      <img src={alberto} alt="Jane" className="about-img"/>
      <div className="container">
        <h2>Alberto Medellin</h2>
        <p className="title">FrontEnd Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <p>https://github.com/MEGAALBERT</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
    </div>



 
  <div className="column">
    <div className="card">
      <img src={mat} alt="Mike" className="about-img"/>
      <div className="container">
        <h2>Mattia Marcenta</h2>
        <p className="title">BackEnd Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <p>https://github.com/matt185</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  

  
  <div className="column">
    <div className="card">
      <img src={phil} alt="John" className="about-img"/>
      <div className="container">
        <h2>Philippe Huynh</h2>
        <p className="title">FrontEnd Designer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <p>https://github.com/pw-yuu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>



<div className="column">
    <div className="card">
      <img src={muk} alt="John"  className="about-img"/>
      <div className="container">
        <h2>Mukthar Otarbayev</h2>
        <p className="title">BackEnd Developer</p>
        <p>Student at Code Chrysalis CC13.</p>
        <p>https://github.com/MukhtarKaz</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


</div>
</div>
    )
}

