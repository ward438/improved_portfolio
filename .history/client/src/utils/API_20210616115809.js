import axios from "axios";
import React, { useState, useEffect } from "react";
import API from "./API";



export default {
  getRepos: function() {
    // return axios.get("https://api.github.com/users/ward438/repos")
    let config = {
      headers: {'User-Agent': 'User-Agent'}
    };
    axios.get("https://api.github.com/users/ward438/repos", config)   
    const [repos, setRepos] = useState([])
    const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadRepos()
    // }, [])
    useEffect(() => {
      LoadRepos()
  }, [])

    const LoadRepos = async () => {
        await API.getRepos()
          .then(res => 
            setRepos(res.data),
            console.log(API.getRepos()),
            console.log('')          
          )
          .then((response) => {
            console.log(response)           
            
          })
          .catch(err => console.log(err));
      };
    }  
   
};
