import React from "react";
import PropsTypes from "prop-types";

function Movie({ year, title, summary, poster, genre }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
          {genre.map((genre, index) => (
            <li key="index" className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.PropsTypes = {
  id: PropsTypes.number.isRequired,
  year: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
};
export default Movie;
