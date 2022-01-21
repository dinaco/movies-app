import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailsView = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-2 col-2 my-4 d-flex align-items-stretch">
      <div className="card">
        <Link to={detailsView}>
          {" "}
          <img
            src={
              movie.poster_path
                ? posterUrl
                : "https://www.eglsf.info/wp-content/uploads/image-missing.png"
            }
            className="card-img-top"
            alt={movie.original_title}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text" maxlength="10">
            {movie.overview.length > 50 ? (
              `${movie.overview.substring(0, 50)} ...`
            ) : movie.overview ? (
              movie.overview
            ) : (
              <span className="text-warning">No description from TMDB</span>
            )}
          </p>
          <Link
            to={detailsView}
            className="btn btn-primary mt-auto align-self-start"
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
