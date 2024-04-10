import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchIcon from './search.png';


function App() {

  const [articles, setArticles] = useState([]);
  const [searchKey, setSearchKey] = useState('lenovo');

  const loadNews = async () => {
    try{
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchKey}&from=2024-04-09&to=2024-04-09&sortBy=popularity&apiKey=a429b553c4664039843b41e85fa5d7ed`);

      setArticles(response.data.articles);
    }
    catch(error){
      console.log(error);
    }
  };


  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchKey]);
  
  



  return (
    <div>
      <div className='news-navbar'>
        <h1 className='news-heading'> News App </h1>
        <input type='text' placeholder='Search' className='search-input' value={searchKey} onChange={ (e) => {
          setSearchKey(e.target.value);
        }}/> 
        <img src={SearchIcon} className='search-icon'/>
      </div>
    
      <div className='news-container'>
        {
          articles.map((article, index) => {
            const {author, title, description, url, urlToImage, publishedAt} = article;

            return (<NewsCard author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} key={index} />)
          })
        }
      </div>

    </div>
  )
}

export default App
