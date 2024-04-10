import React, {useState, useEffect} from 'react';
import './NewsCard.css';


function NewsCard({ author, title, description, url, urlToImage, publishedAt }) {


    return (
        <div className='news-card'>
            <img src={urlToImage} className='news-img'/>
            <h1 className='news-title'> {title.substring(0, 40)} </h1>
            <p className='news-desc'>{description.substring(0, 110)}{description.length > 50 ?'...':''}</p>
            <div className='news-post-info'>
                <p className='news-author'>{author}</p>
                <p className='news-date'>{publishedAt}</p>
            </div>
            <button type='button' className='read-more-btn'> <a href={url} className='read-more-link'> Read more... </a> </button>
        </div>
    )
}

export default NewsCard