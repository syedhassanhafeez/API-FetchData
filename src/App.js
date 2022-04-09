import React, { useEffect, useState } from "react"

import './App.css';

const App = () => {

  const [post, setPost] = useState([])
  useEffect(() => {
    const url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1'
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        return await response.json();
        // console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    var c = fetchData();
    c.then(data => setPost(data.data.sort((a, b) => a.Title.localeCompare(b.Title))
    ))
  }, []);
  
  return <div>
    <ul>
      {post.map(item => <li key={item.Title}>{item.Title}</li>)}
    </ul>
  </div>;
};


export default App;
