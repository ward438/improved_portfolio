// import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';



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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>



    // <div>
    //   <h1>
    //     {repos.map(results => (
    //       // <div key={results.id}>{results.id}</div>,  
    //       <div key={results.full_name}>{results.full_name}</div>         
    //     ))}
    //   </h1>
    // </div>
  )   

    }  

    export default GetRepos;


    
