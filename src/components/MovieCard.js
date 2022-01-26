import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailsView = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-2 col-2 my-4 d-flex align-items-stretch">
      <div className="card">
        <Link className="poster" to={detailsView}>
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
          <span
            className={
              "p-2 badge mx-3 d-flex justify-content-center " +
              (movie.vote_average > 7 ? "bg-success" : "bg-danger")
            }
          >
            {movie.vote_average ? movie.vote_average : "-"}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="ms-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
            </svg>
          </span>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text" maxLength="10">
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
