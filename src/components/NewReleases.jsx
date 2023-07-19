import React, { useEffect, useState } from "react";
import "./css/newreleases.css";

function NewReleases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const movieElements = movies.map((movie) => {
    return (
      <div key={movie.id} className="carousel-item">
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt=""
          className="movie-backdrop"
        />

        <div className="movie-info">
          <h2 className="movie-info__title">{movie.title}</h2>
          <p className="movie-info__rating">
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            {movie.vote_average}
          </p>
          <p className="movie-info__overview">{movie.overview}</p>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt=""
          className="movie-poster"
        />
      </div>
    );
  });

  return (
    <main className="movies-container">
      <div className="container-header">
        <h3 className="movies-container__title">New Releases</h3>
      </div>
      <div className="carousel">
        <div className="carousel-items">{movieElements}</div>
      </div>
    </main>
  );
}

export default NewReleases;
