import React from 'react'

function IntNews({intNews}) {
    return (
        <div>
        {intNews.map(elem=> (
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

export default IntNews
