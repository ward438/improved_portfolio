import axios from "axios";


function()getRepos  {
    axios.get("https://api.github.com/users/ward438/repos", {headers: {'User-Agent': 'Ward438'} })
    // return axios({
    //   method: "GET",
    //   url: "https://api.github.com/users/ward438/repos",
      
    // })
      .then(response => {
        // console.log(response)

      }) 
      .catch(function(e) {
        console.log(e);
        // console.log(res)    
      } 
    };
  }
