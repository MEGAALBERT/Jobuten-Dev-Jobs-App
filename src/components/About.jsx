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
      As well as keep out clients informed of the latest technologies news around the world!.</p>
</div>

<h2 >Our Team</h2>

<div className="row">

  <div className="column">
    <div className="card">
      <img src={eri} alt="Jane" width="400px"/>
      <div className="container">
        <h2>Eri Shimada</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
 


  <div className="column">
    <div className="card">
      <img src={alberto} alt="Jane" width="400px"/>
      <div className="container">
        <h2>Alberto Medellin</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
    </div>



 
  <div className="column">
    <div className="card">
      <img src={mat} alt="Mike" width="400px"/>
      <div className="container">
        <h2>Mattia</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  

  
  <div className="column">
    <div className="card">
      <img src={phil} alt="John" width="400px"/>
      <div className="container">
        <h2>Philippe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>



<div className="column">
    <div className="card">
      <img src={muk} alt="John" width="400px"/>
      <div className="container">
        <h2>Mukthar</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


</div>
</div>
    )
}

