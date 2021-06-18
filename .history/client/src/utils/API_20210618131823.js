// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';

const GetRepos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/ward438/repos")
      .then(data => {
        return data.json();
      }).then(data => {
        setRepos(data);
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {
        repos.map(repo => {
          return <Card style={{ width: '25rem', marginRight: '1rem', borderRadius: '15px', color: 'white' }}>            
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Img variant="top" src={`https://react-portfolio-rob.s3.amazonaws.com/${repo.id}.png`}/>
              <Card.Text>
                {repo.description}
              </Card.Text>
              <Button variant="primary" style={{ width: '100%' }}>{repo.html_url}</Button>
            </Card.Body>
          </Card>
        })
      }
    </React.Fragment>
  )
}

export default GetRepos;



