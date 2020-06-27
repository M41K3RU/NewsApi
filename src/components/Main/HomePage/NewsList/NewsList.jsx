import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";
const NewsList = (props) => (
  <div id="HomePage">
    {props.articles.map((item) => (
      <NewsCard
        key={item.key}
        publishedAt={item.publishedAt}
        source={item.source.name}
        urlToImage={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
        sortBy={item.sortBy}
      />
    ))}
  </div>
);

export default NewsList;
