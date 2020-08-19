import React from 'react';
import pin from '../img/pin.svg'
import "../NewsJobsStyle.css";

function IntJobs({intJobs}) {




    return (
        <div className="job-card-container">
            {intJobs.map(job => (
                <article>
                    <h3>{job.jobtitle}  @<span>{job.company}</span></h3>
                    <p>{job.snippet}</p>
                    <p> <img src={pin} alt="pin" className="pin-img"/>{job.formattedLocationFull}</p>
                    <button><a href={job.url}>View Job</a></button>
                    <p>Posted on {job.date}</p>
                </article>
            ))}
        </div>
    )
}

export default IntJobs
