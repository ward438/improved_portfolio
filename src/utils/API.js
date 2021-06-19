
import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';


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
          return <Card key={repo.id} style={{ width: '25rem', marginRight: '1rem', borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Img variant="top" src={`https://react-portfolio-rob.s3.amazonaws.com/${repo.id}.png`} style={{ marginBottom: "10px" }}/>
              <Card.Text>
                {repo.description}
              </Card.Text>                              
            </Card.Body>
            <a href={`${repo.html_url}`}>GitHub:&nbsp;{repo.name}</a><br/>
          </Card>
        })
      }
    </React.Fragment>
  )
}

export default GetRepos;

