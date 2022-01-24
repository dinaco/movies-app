import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
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

  const dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const [details, { cast }] = movieDetails;
      const posterPath = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${details.backdrop_path}`;
      return (
        <>
          <Hero text={details.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={
                    details.poster_path
                      ? posterPath
                      : "https://www.eglsf.info/wp-content/uploads/image-missing.png"
                  }
                  alt={details.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-6">
                <h2>{details.original_title}</h2>
                <p className="lead">
                  {details.overview ? (
                    details.overview
                  ) : (
                    <span className="text-warning">
                      No description from TMDB
                    </span>
                  )}
                </p>
                <div>
                  <span className="badge bg-secondary mx-2">
                    Status: {details.status}
                  </span>
                  <span className="badge bg-secondary mx-2">
                    Original Language: {details.spoken_languages[0].name}
                  </span>
                  <span className="badge bg-secondary mx-2">
                    Budget: $ {dollar.format(details.budget)}
                  </span>
                  <span className="badge bg-secondary mx-2">
                    Revenue: $ {dollar.format(details.revenue)}
                  </span>
                </div>
              </div>
              <div
                id="carouselExampleCaptions"
                className="carousel slide col-md-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {cast.map((item, i) => {
                    return (
                      <button
                        key={i}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : null}
                        aria-current={i === 0 ? "true" : null}
                        aria-label={`Slide ${i + 1}`}
                      ></button>
                    );
                  })}
                </div>
                <div className="carousel-inner">
                  {cast.map((item, i) => {
                    let profilePic = `https://image.tmdb.org/t/p/w500/${item.profile_path}`;
                    return (
                      <div
                        key={i}
                        className={
                          i === 0 ? "carousel-item active" : "carousel-item"
                        }
                      >
                        <img
                          src={
                            item.profile_path
                              ? profilePic
                              : "https://www.eglsf.info/wp-content/uploads/image-missing.png"
                          }
                          className="d-block w-100"
                          alt={item.name}
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>{item.name}</h5>
                          <p>{item.character}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
