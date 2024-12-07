import React from "react";
import axios from "axios";
import Movie from "./components/Movie";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
    this.setState((current) => ({isLoading : !current.isLoading, movies : movies.data.data.movies}));
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;

    return (
      <div><h1>{isLoading ? "Loading..." : movies.map((movie) => (<Movie id={movie.id} name={movie.title} img={movie.medium_cover_image} genres={movie.genres} summary={movie.summary}/>))}</h1></div>
    );
  }
}

export default App;
