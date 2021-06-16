// import axios from "axios";
import React, { useState, useEffect } from "react";



const GetRepos = () => {   
    const [repos, setRepos] = useState([])  
    
    useEffect(() => {
      // axios.get("https://api.github.com/users/ward438/repos", config) 
      fetch("https://api.github.com/users/ward438/repos")
      .then(data => {
        return data.json();
      }).then(data => {
        setRepos(data);
        console.log(data[0])
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>
        {repos.map(results => (
          <div key={results.id} ></div> 
            
        ))}test
      </h1>
    </div>
  )   

    }  

    export default GetRepos;


    
