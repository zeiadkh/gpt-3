import React from 'react'
import './article.css'


const Article = ({img, date, title}) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-container">
        <img src={img} alt="blog" />
        <div className="gpt3__article-content">
          <div className="titledate">
            <span>{date}</span>
            <h4>{title}</h4>
          </div>
          <span>Read Full Article</span>
        </div>
      </div>
    </div>
  );
}

export default Article