const Details = ({ details }) => {
  const dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const dateObj = new Date(details.release_date);
  const releaseDate = dateObj.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  return (
    <div className="col-md-6">
      <h2>{details.original_title}</h2>
      <p className="lead">
        {details.overview ? (
          details.overview
        ) : (
          <span className="text-warning">No description from TMDB</span>
        )}
      </p>
      <div className="row justify-content-md-center">
        <span className="col badge bg-secondary m-2">
          Status: {details.status ? details.status : "-"}
        </span>
        <span className="col badge bg-secondary m-2">
          Release Date: {details.release_date ? releaseDate : "-"}
        </span>
        <span className="col badge bg-secondary m-2">
          Language:{" "}
          {details.spoken_languages[0].name
            ? details.spoken_languages[0].name
            : "-"}
        </span>
        <span className="col badge bg-secondary m-2">
          Ratings: {details.vote_average ? details.vote_average : "-"}
        </span>
        <span className="col badge bg-secondary m-2">
          Budget: {details.budget ? dollar.format(details.budget) : "-"}
        </span>
        <span className="col badge bg-secondary m-2">
          Revenue: {details.revenue ? dollar.format(details.revenue) : "-"}
        </span>
      </div>
    </div>
  );
};

export default Details;
