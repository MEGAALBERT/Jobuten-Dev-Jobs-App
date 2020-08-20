import React, { useState } from 'react';
import axios from "axios";
import IntJobs from "./IntJobs";
import JapJobs from "./JapJobs";
import "../NewsJobsStyle.css";
require('dotenv').config();
function Job() {

const [japJobs, setJapJobs] = useState([]);
const [intJobs, setintJobs] = useState([]);
const [viewJobs, setView] = useState("");
const [jobParam, setJobParam] = useState("Software");

const getJapJobs = () => {
    axios({
    "method":"GET",
    "url":"https://indeed-com.p.rapidapi.com/search/jobs",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"indeed-com.p.rapidapi.com",
    "x-rapidapi-key":process.env.REACT_APP_API_KEY,
    "useQueryString":true
    },"params":{
    "sort":"relevance",
    "location":"Tokyo",
    "offset":"0",
    "query":jobParam,
    "country":"jp",
    "radius":"25"
    }
    })
    .then((response)=>{
      setJapJobs(response.data.results);
      console.log(japJobs);
    })
    .catch((error)=>{
      console.log(error)
    })
}


async function getIntJobs(){
    axios({
        "method":"GET",
        "url":"https://indeed-com.p.rapidapi.com/search/jobs",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"indeed-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.REACT_APP_API_KEY,
        "useQueryString":true
        },"params":{
        "sort":"relevance",
        "offset":"0",
        "query":jobParam,
        }
        })
        .then((response)=>{
          console.log(response.data.results);
          setintJobs(response.data.results);
        })
        .catch((error)=>{
          console.log(error)
        })
}



    return (
        <div>
            <input type="text" className="search-bar" placeholder="Search Jobs..." onChange={(e)=>{
                    setJobParam(e.target.value);
                }}/>
            <span className="btn-news-container">
            <button className="btn-news" onClick={()=> {
                getIntJobs();
                setView("int");
            }}>International Jobs</button>
            <button className="btn-news btn-jp-news" onClick={()=> {
                getJapJobs();
                setView("jap")
            }}>Tokyo Jobs</button>
            {viewJobs==="int"?
            <IntJobs intJobs={intJobs}/>:
            <JapJobs japJobs={japJobs}/>
            } 
            </span>
        </div>
    )
}

export default Job
