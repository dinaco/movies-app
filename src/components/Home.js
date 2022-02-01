import Hero from "./Hero";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      ).then((response) => response.json()),
      fetch(`
      https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`).then(
        (response) => response.json()
      ),
      fetch(`
      https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`).then(
        (response) => response.json()
      ),
    ]).then((data) => {
      setHomeMovies(data);
      setIsLoading(false);
    });
  }, []);

  const renderHome = () => {
    const [upcoming, trending, toprated] = homeMovies;
    if (!isLoading) {
      return (
        <div className="row">
          <h2 className="mt-4">Upcoming Movies</h2>
          <div className="card-hscroll d-flex my-4">
            {upcoming.results.map((obj, i) => {
              return <MovieCard movie={obj} key={i} extrainfo={false} />;
            })}
          </div>
          <h2 className="mt-4">Trending</h2>
          <div className="card-hscroll d-flex my-4">
            {trending.results.map((obj, i) => {
              return <MovieCard movie={obj} key={i} extrainfo={false} />;
            })}
          </div>
          <h2 className="mt-4">Top rated</h2>
          <div className="card-hscroll d-flex my-4">
            {toprated.results.map((obj, i) => {
              return <MovieCard movie={obj} key={i} extrainfo={false} />;
            })}
          </div>
        </div>
      );
    } else {
      return <h2>Loading data...</h2>;
    }
  };

  return (
    <>
      <Hero text="Welcome to Movie Browser App, powered by TMDB" />
      <div className="container">{renderHome()}</div>
    </>
  );
};

export default Home;
