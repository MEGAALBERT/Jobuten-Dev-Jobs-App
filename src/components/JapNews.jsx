import React from 'react'

function JapNews({japNews}) {
    return (
        <div>
        {japNews.map(elem=> (
                <div className="news-card">
                    <article>
                    <h3>{elem.title}</h3>
                    <img src={elem.media} alt="mediaImage" width="250px" height="150"></img>
                    <p> {elem.summary} </p>

                    </article>
                    <button className="card-news-btn"><a href={elem.link}>Read more</a></button>
                </div>
            ))}
        </div>
    )
}

export default JapNews
