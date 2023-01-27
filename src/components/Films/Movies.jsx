import React from "react";
import MovieCard from "./MovieCard";

const Movies = (props) => {
   const { movies = [] } = props
   return (
      <div className="movies">
         {movies.length ? movies.map(movie => <MovieCard key={movie.imdbID}
            {...movie} />) : <h4>Nothing Found</h4>}
      </div>
   )
}




export default Movies;