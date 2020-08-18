import React, { useState } from 'react';
import axios from "axios";
import "../NewsJobsStyle.css";

function Job() {

const [jobs, setJobs] = useState([])

const allJobs = () => {
    // axios({
    // "method":"GET",
    // "url":"https://indeed-com.p.rapidapi.com/search/jobs",
    // "headers":{
    // "content-type":"application/octet-stream",
    // "x-rapidapi-host":"indeed-com.p.rapidapi.com",
    // "x-rapidapi-key":"621e221175msh97322307cb5c700p1b4775jsnc690eac8a2ee",
    // "useQueryString":true
    // },"params":{
    // "sort":"relevance",
    // "location":"Tokyo",
    // "offset":"0",
    // "query":"Software",
    // "country":"jp",
    // "radius":"25"
    // }
    // })
    // .then((response)=>{
    //   setJobs(response.data.results);
    //   console.log(jobs);
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
}




    return (
        <div>
            <p>Working on jobs</p>
            <button onClick={()=> {
                allJobs();
            }}>get jobs</button>
            {jobs.map(job => (
                <p>{job.jobtitle}</p>
            ))}
        </div>
    )
}

export default Job
