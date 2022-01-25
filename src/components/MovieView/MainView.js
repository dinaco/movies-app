import Hero from "../Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PosterImage from "./PosterImage";
import Details from "./Details";
import CastCarousel from "./CastCarousel";

const MainView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      ).then((response) => response.json()),
      fetch(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`).then(
        (response) => response.json()
      ),
    ]).then((data) => {
      setMovieDetails(data);
      setIsLoading(false);
    });
  }, [id]);
  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const [details, { cast }] = movieDetails;
      const backdropUrl = `https://image.tmdb.org/t/p/original${details.backdrop_path}`;
      return (
        <>
          <Hero text={details.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <PosterImage details={details} />
              <Details details={details} />
              <CastCarousel cast={cast} />
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MainView;
