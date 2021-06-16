import axios from "axios";

export default {


  getRepos: function() {
    // return axios.get("https://api.github.com/users/ward438/repos")
    let config = {
      headers: {'User-Agent': 'User-Agent'}
    };
    return axios.get("https://api.github.com/users/ward438/repos", config)
    
    
    }
      // .then(function(response) {
      //   console.log(response)
        
      // })
    
    // console.log(res)
    
  // }
};
