const PosterImage = ({ details }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
  return (
    <div className="col-md-3 my-md-3">
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
  );
};

export default PosterImage;
