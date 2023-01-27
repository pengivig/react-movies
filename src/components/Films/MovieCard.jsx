
const MovieCard = (props) => {
   const {
      Title: title,
      Year: year,
      imdbID: id,
      Type: type,
      Poster: poster,
   } = props

   return (
      <div className="card">
         <div className="card-image waves-effect waves-block waves-light">
            {poster === 'N/A' ? <img src={`https://via.placeholder.com/300x400.png?text=${title}`}/> : <img className="activator" src={poster} />}
         </div>
         <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">{year}</i></span>
         </div>
      </div>
   )
}
export default MovieCard;