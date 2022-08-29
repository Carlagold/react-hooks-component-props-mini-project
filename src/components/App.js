import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import blogData from "../data/blog";
console.log(blogData);

function App() {
 
  return (
    <div className="App">
      <Header name={blogData.name}/>
      
      <About about={blogData.about} image={blogData.image}  />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
