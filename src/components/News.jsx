
import React, { useState } from 'react';
import axios from "axios";
import IntNews from "./IntNews";
import JapNews from "./JapNews";
import "../NewsJobsStyle.css";

require('dotenv').config();

function News() {

const [intNews, setIntNews] = useState([]);
const [japNews, setJapNews] = useState([]);
const [newsView, setNewsView] = useState("");
const [searchNew, setSearchNews] = useState("Software")


const getIntNews=()=>{
    axios({
        "method":"GET",
        "url":"https://newscatcher.p.rapidapi.com/v1/search_free",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"newscatcher.p.rapidapi.com",
        "x-rapidapi-key":process.env.REACT_APP_API_KEY,
        "useQueryString":true
        },"params":{
        "page_size":"20",
        "media":"True",
        "lang":"en",
        "q":searchNew,
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
        "x-rapidapi-key":process.env.REACT_APP_API_KEY,
        "useQueryString":true
        },"params":{
        "media":"True",
        "lang":"ja",
        "q":searchNew,
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
                <input type="text" className="search-bar" placeholder="Search News..." onChange={(e)=>{
                    setSearchNews(e.target.value);
                }}/>
                <span className="btn-news-container">
                    <button className="btn-news btn-int-news" onClick={()=> {
                        getIntNews();
                        setNewsView("glob");
                    }}>Global News</button>
                    <button className="btn-news btn-jp-news" onClick={()=> {
                        getJapNews();
                        setNewsView("jap");
                    }}>Japanese News</button>
                </span>
            </div>

                    {newsView==="glob"?
                    <IntNews intNews={intNews}/>
                    :
                    <JapNews japNews={japNews}/>
                    }

        </div>
    )
}

export default News
