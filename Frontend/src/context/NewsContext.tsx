import { useState, useEffect } from "react";
import React from "react";
import Title from "../components/Title";
import Newsprop from "./Newsprop";
import { Link } from "react-router-dom";

const NewsContext = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []));
  }, []);

  return (
    <div className="container mx-auto mb-5 text-center ">
      <Title text1={"Top Headlines in Business Today"} />
      <Link to="/news" className="text-[#E1F0F5] mb-7 text-right">
        Read More
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-6 gap-x-4">
        {articles.slice(0, 4).map((news, index) => (
          <Newsprop
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            
          />
        ))}
      </div>
    </div>
  );
};

export default NewsContext;
