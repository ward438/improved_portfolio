// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';




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
    <React.Fragment>
      {
        repos.map(repo => {
          return <Card style={{ width: '25rem', marginRight: '1rem' }}>
            <Card.Img variant="top" src="https://react-portfolio-rob.s3.amazonaws.com/${repo.id}.png" />
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>
                {repo.description}
              </Card.Text>
              <Button variant="primary" style={{ width: '100%' }}>{repo.html_url}</Button>
            </Card.Body>
          </Card>
        })
      }
    </React.Fragment>




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



