import axios from "axios";
import React, { useState, useEffect } from "react";
import API from "./API";



const GetRepos = () => {
    // return axios.get("https://api.github.com/users/ward438/repos")
    // let config = {
    //   headers: {'User-Agent': 'User-Agent'}
    // };
    const [formObject, setFormObject] = useState({})
    const [repos, setRepos] = useState([])

   
    
    useEffect(() => {
      // axios.get("https://api.github.com/users/ward438/repos", config) 
      fetch("https://api.github.com/users/ward438/repos")
      .then(data => {
        return data.json();
      }).then(data => {
        setRepos(data);
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
        ))}
      </h1>
    </div>
  )
    // const LoadRepos = async () => {
    //     await API.getRepos()
    //       .then(res => 
    //         setRepos(res.data),
    //         console.log(API.getRepos()),
    //         console.log('')          
    //       )
    //       .then((response) => {
    //         console.log(response)           
            
    //       })
    //       .catch(err => console.log(err));
    //   };
    }  

    export default GetRepos;
   

