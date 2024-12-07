import MovieCss from "../css/Movie.module.css";

function Movie({id, name, img, genres, summary}){
    return <div className={MovieCss.movie_box}>
        <img src={img}></img>
        <h3>{name}</h3>
        <ul>
            {genres.map((genre) => <li key={id + genre}>{genre}</li>)}
        </ul>
        <p>{summary} </p>
    </div>;
}

export default Movie;