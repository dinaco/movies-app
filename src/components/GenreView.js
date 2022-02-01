import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GenreView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageId, setPageId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const { linkId } = location.state;

  useEffect(() => {
    if (pageId !== linkId) {
      setPageNumber(1);
      setMovieDetails([]);
    }
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&with_genres=${linkId}&page=${pageId === linkId ? pageNumber : 1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails((movieDetails) => [...movieDetails, ...data.results]);
        setIsLoading(false);
        setPageId(linkId);
      });
  }, [linkId, pageNumber]);

  function fetchMoreData() {
    setPageNumber(pageNumber + 1);
  }

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const resultsHTML = movieDetails.map((obj, i) => {
        return <MovieCard movie={obj} key={i} extrainfo={true} />;
      });
      return (
        <>
          <Hero text={isLoading ? `` : `You're Browsing ${id} Movies`} />
          <div className="container">
            <InfiniteScroll
              className="row"
              dataLength={pageNumber}
              next={fetchMoreData}
              hasMore={pageNumber < 5 ? true : false}
              loader={<h4>Loading...</h4>}
              endMessage={
                <div className="alert alert-success text-center" role="alert">
                  You've rechead the limit of 60 movies loaded, congrats!
                </div>
              }
            >
              {resultsHTML}
            </InfiniteScroll>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default GenreView;
