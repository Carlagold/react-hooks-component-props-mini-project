import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {

  const articles = posts.map(( post ) => (
      <Article 
      key={posts.id} 
      title={posts.title} 
      date={posts.date} 
      preview={posts.preview} 
      minutes={posts.minutes} />
      ));
      
  return <main>{articles}</main>;
}
export default ArticleList;