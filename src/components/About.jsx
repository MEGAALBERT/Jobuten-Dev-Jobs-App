import React from 'react';
const alberto = require("../images/Alberto.jpg");
const eri = require("../images/EriShimada.JPG");
const mat = require("../images/Mattia.JPG");
const phil = require("../images/Philippe.JPG")
const muk = require("../images/Mukthar.JPG")

export default function About() {

    return (
        <div className="about-container">
          <h1>We Are <b>JobuTen</b></h1>
          <br/>
          <h2>Our Mission</h2>
          <br/>
          <p>To provide our users and clients with the best jobs opportunities in Japan and around the world!<br />
          As well to keep them informed of the latest technology trends locally in japan and global.
          </p>
          <br/>
          <h2>Our Team</h2>
          <img src={alberto} width="100px" alt="alberto"/><span>Alberto Medellin</span>
          <img src={eri} width="100px" alt="eri"/><span>Eri Shimada</span>
          <img src={mat} width="100px" alt="mattia"/><span>Mattia Marcenta</span>
          <img src={phil} width="100px" alt="philippe"/><span>Philippe Huynh</span>
          <img src={muk} width="100px" alt="mukthar"/><span>Mukthar Otarbayev</span>
        </div>
    )
}

