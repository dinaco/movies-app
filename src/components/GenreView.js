import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GenreView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageId, setPageId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (pageId !== id) {
      setPageNumber(1);
      setMovieDetails([]);
    }
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${id}&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails((movieDetails) => [...movieDetails, ...data.results]);
        setIsLoading(false);
        setPageId(id);
      });
  }, [id, pageId, pageNumber]);

  function fetchMoreData() {
    setPageNumber(pageNumber + 1);
  }

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const resultsHTML = movieDetails.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />;
      });
      return (
        <>
          <Hero text="Search by genre" />
          <div className="container">
            <InfiniteScroll
              className="row"
              dataLength={pageNumber}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
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
