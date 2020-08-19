import React, { useState } from 'react';
import axios from "axios";
import IntJobs from "./IntJobs";
import JapJobs from "./JapJobs";
import "../NewsJobsStyle.css";

function Job() {

const [japJobs, setJapJobs] = useState([]);
const [intJobs, setintJobs] = useState([])
const [viewJobs, setView] = useState("")

// const getJapJobs = () => {
//     axios({
//     "method":"GET",
//     "url":"https://indeed-com.p.rapidapi.com/search/jobs",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"indeed-com.p.rapidapi.com",
//     "x-rapidapi-key":"621e221175msh97322307cb5c700p1b4775jsnc690eac8a2ee",
//     "useQueryString":true
//     },"params":{
//     "sort":"relevance",
//     "location":"Tokyo",
//     "offset":"0",
//     "query":"Software",
//     "country":"jp",
//     "radius":"25"
//     }
//     })
//     .then((response)=>{
//       setJapJobs(response.data.results);
//       console.log(japJobs);
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
// }


// async function getIntJobs(){
//     axios({
//         "method":"GET",
//         "url":"https://indeed-com.p.rapidapi.com/search/jobs",
//         "headers":{
//         "content-type":"application/octet-stream",
//         "x-rapidapi-host":"indeed-com.p.rapidapi.com",
//         "x-rapidapi-key":"621e221175msh97322307cb5c700p1b4775jsnc690eac8a2ee",
//         "useQueryString":true
//         },"params":{
//         "sort":"relevance",
//         "offset":"0",
//         "query":"Software Developer Engineer"
//         }
//         })
//         .then((response)=>{
//           console.log(response.data.results);
//           setintJobs(response.data.results);
//         })
//         .catch((error)=>{
//           console.log(error)
//         })
// }


const mockIntJobs= [
    {
        company: "エムスリー株式会社",
        date: "Tue, 23 Jul 2019 19:44:18 GMT",
        expired: false,
        jobtitle: "SUPER Data Engineer",
        formattedLocationFull: "東京都 港区 赤坂",
        snippet: "だけ早く収集し、最適な形で提供すること」をシステムを通じて実現する。 また、SET（<b>Software</b> Engineer in Test）エンジニアとして、特に「自動テスト」を通じて... ",
        url: "https://jp.indeed.com/viewjob?jk=3342579ab5021647&qd=v3NYM5"
    },
    {
        company: "Google",
        date: "Mon, 17 Aug 2020 19:44:18 GMT",
        expired: false,
        jobtitle: "SUPER JR. Software Dev",
        formattedLocationFull: "San Francisco, Monarch St 2340",
        snippet: "Looking for new software engineer with no experience required, knows React and FrontEnd",
        url: "https://www.indeed.com"
    },
]

const mockJapJobs = [
    {
        company: "エムスリー株式会社",
        date: "Tue, 23 Jul 2019 19:44:18 GMT",
        expired: false,
        jobtitle: "Data Engineer",
        formattedLocationFull: "東京都 港区 赤坂",
        snippet: "だけ早く収集し、最適な形で提供すること」をシステムを通じて実現する。 また、SET（<b>Software</b> Engineer in Test）エンジニアとして、特に「自動テスト」を通じて... ",
        url: "https://jp.indeed.com/viewjob?jk=3342579ab5021647&qd=v3NYM5"
    },
    {
        company: "Google",
        date: "Mon, 17 Aug 2020 19:44:18 GMT",
        expired: false,
        jobtitle: "JR. Software Dev",
        formattedLocationFull: "San Francisco, Monarch St 2340",
        snippet: "Looking for new software engineer with no experience required, knows React and FrontEnd",
        url: "https://www.indeed.com"
    },
]
    return (
        <div>
            <button onClick={()=> {

                //getIntJobs();
                setintJobs(mockIntJobs);
                setView("int");
            }}>International Jobs</button>
            <button onClick={()=> {
                //getJapJobs();
                setJapJobs(mockJapJobs);
                setView("jap")
            }}>Tokyo Jobs</button>
            {viewJobs==="int"?
            <JapJobs japJobs={japJobs}/>:
            <IntJobs intJobs={intJobs}/>
            } 

        </div>
    )
}

export default Job
