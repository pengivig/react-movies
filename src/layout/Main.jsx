import React from "react";
import Movies from "../components/Films/Movies"
import Preloader from "../components/Films/Preloader";
import Search from "../components/Films/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
         isLoading: false,
      }
   }

   componentDidMount() {
      this.setState({ isLoading: true })
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron_man`)
         .then(res => res.json())
         .then(data => this.setState({ movies: data.Search, isLoading: false }))
         .catch(err => {
            console.error(err);
            this.setState({isLoading: false})
         });
   }

   searchMovie = (search, type) => {
      this.setState({ isLoading: true })
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}`)
         .then(res => res.json())
         .then(data => this.setState({ movies: data.Search, isLoading: false }))
         .catch(err => {
            console.error(err);
            this.setState({isLoading: false})
         });

   }

   render() {
      const { movies, isLoading } = this.state;
      return (
         <main className="container content">
            Hello from Movies App
            <Search searchMovie={this.searchMovie} />
            { isLoading ? <Preloader /> : <Movies movies={movies} />}
         </main>
      )
   }
}

export default Main;