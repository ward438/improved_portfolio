import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

  getRepos: function() {
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

