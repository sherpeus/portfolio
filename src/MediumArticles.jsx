import React, { useState, useEffect } from 'react';
import "./css/Article.css";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mdrodrigo2006')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          setArticles(data.items);
        }
      })
      .catch((err) => console.error("Error fetching Medium articles:", err));
  }, []);


  const getArticleImage = (article) => {

    if (article.thumbnail) return article.thumbnail;
    

    const srcRegex = /<img[^>]+src="([^">]+)"/;
    const match = article.description ? article.description.match(srcRegex) : null;
    

    return match ? match[1] : '/path-to/watermarked_img_17755133442738529718.png';
  };

  return (
    <div className="article-grid">
      {articles.map((article) => (
        <div key={article.guid} className="article-card">
          
          <img 
            src={getArticleImage(article)} 
            alt={article.title} 
            className='article-img'
          />
          <div className="data">
          <h4><a  href={article.link} target="_blank" rel="noopener noreferrer">
           {article.title} <i class="fa-solid fa-book-open"></i>
          </a></h4>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediumArticles;