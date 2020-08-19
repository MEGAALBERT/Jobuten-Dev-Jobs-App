import React, { useState } from 'react';
import axios from "axios";
import "../NewsJobsStyle.css";

function News() {

const [intNews, setIntNews] = useState([]);
const [japNews, setJapNews] = useState([]);

const getIntNews=()=>{
    axios({
        "method":"GET",
        "url":"https://newscatcher.p.rapidapi.com/v1/search_free",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"newscatcher.p.rapidapi.com",
        "x-rapidapi-key":"621e221175msh97322307cb5c700p1b4775jsnc690eac8a2ee",
        "useQueryString":true
        },"params":{
        "page_size":"20",
        "media":"True",
        "lang":"en",
        "q":"Software"
        }
        })
        .then((response)=>{
            console.log(response.data.articles);
          setIntNews(response.data.articles)
          console.log(intNews)
        })
        .catch((error)=>{
          console.log(error)
        })
}

const getJapNews=()=>{
    axios({
        "method":"GET",
        "url":"https://newscatcher.p.rapidapi.com/v1/search_free",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"newscatcher.p.rapidapi.com",
        "x-rapidapi-key":"621e221175msh97322307cb5c700p1b4775jsnc690eac8a2ee",
        "useQueryString":true
        },"params":{
        "media":"True",
        "lang":"ja",
        "q":"software"
        }
        })
        .then((response)=>{
          console.log(response.data.articles);
          setJapNews(response.data.articles)
        })
        .catch((error)=>{
          console.log(error)
        })
    }

    return (
        <div>
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search News..."/>
                <span className="btn-news-container">
                    <button className="btn-news" onClick={()=> {
                        getIntNews();
                    }}>Global News</button>
                    <button className="btn-news btn-jp-news"onClick={()=> {
                        getJapNews();
                    }}>Japanese News</button>
                </span>
            </div>

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

export default News
