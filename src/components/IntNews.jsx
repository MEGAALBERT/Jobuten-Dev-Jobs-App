import React from 'react'

function IntNews({intNews}) {
    return (
        <div className="news-card-container">
        {intNews.map(elem=> (
                <div className="news-card">
                    <article>
                        <div className="img-container">
                            <img src={elem.media} alt="mediaImage"></img>
                        </div>
                        <div className="text-container">
                            <h3>{elem.title}</h3>
                            <p> {elem.summary} </p>
                            <a href={elem.link} target="_blank"><button className="card-news-btn">View Article</button></a>
                        </div>

                    </article>
                </div>
            ))}
        </div>
    )
}

export default IntNews
