import React from 'react';
import pin from '../img/pin.svg'
import "../NewsJobsStyle.css";

function IntJobs({intJobs}) {




    return (
        <div className="job-card-container">
            {intJobs.map(job => (
                <article>
                    <div className="job-text-container">
                        <div className="job-content">
                            <div className="job-content1">
                                <h3>{job.jobtitle} <p>@<span className="primary-color">{job.company}</span></p></h3>
                                <p dangerouslySetInnerHTML={{__html: job.snippet}}></p>
                            </div>
                            <div className="job-content2">
                                <div className="job-content2-in">
                                    <p> <img src={pin} alt="pin" className="pin-img"/>{job.formattedLocationFull}</p>
                                    <p className="date">Posted on {job.date}</p>
                                </div>
                                <a href={job.url} target="_blank"><button className="job-btn">View Job</button></a>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default IntJobs
