import React from 'react'
import { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItem';
import Title from '../components/Title';
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${import.meta.env.VITE_API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles || []));
}, []);
  return (
    <div className="container mx-auto text-center">
      <Title text1={'Latest News'} />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 p-4'>
      {articles.map((news, index) => (
  <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
))}

    </div >
      </div>
  )
}

export default News