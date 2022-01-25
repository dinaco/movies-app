const CastCarousel = ({ cast }) => {
  return (
    <div
      id="castCarousel"
      className="carousel slide col-md-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {cast.map((item, i) => {
          let profilePic = `https://image.tmdb.org/t/p/w500/${item.profile_path}`;
          return (
            <div
              key={i}
              className={i === 0 ? "carousel-item active" : "carousel-item"}
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
        data-bs-target="#castCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#castCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CastCarousel;
