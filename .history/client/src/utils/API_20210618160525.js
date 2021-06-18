
import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
          return <Card style={{ width: '25rem', marginRight: '1rem', borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title>{repo.name}Title</Card.Title>
              <Card.Img variant="top" src={`https://react-portfolio-rob.s3.amazonaws.com/${repo.id}.png`} />
              <Card.Text>
                {repo.description}
              </Card.Text>
                <a href={`${repo.html_url}`}>Link</a>
              
            </Card.Body>
          </Card>
        })
      }
    </React.Fragment>
  )
}

export default GetRepos;

