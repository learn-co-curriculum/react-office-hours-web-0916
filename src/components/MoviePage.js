import React from 'react';
import MovieDetail from './MovieDetail'
import SearchBar from './SearchBar'

class MoviePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  fetchNewMovie(searchTerm){
    console.log('getting a new movie')
    const url = "http://www.omdbapi.com/?t=" + searchTerm + "&Season=1"
    const movie = fetch(url).then(
      (response) => {return response.json()}).then(
      (data) => {return this.setState({movie: data})})


    // x1. take a search term
    // 2. use that search term to make a request to the API
    // ENDPOINT: http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1
    // 3. it should get some kind of response
    // 4. using this response, it should update its state
    // and rerender itself (thus its own children)
  }

  render(){
    return(
      <div>
       <SearchBar fetchNewMovie={this.fetchNewMovie.bind(this)} />
       <MovieDetail movie={this.state.movie}/>
      </div>
     )
  }
}

export default MoviePage
