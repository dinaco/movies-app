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
      <div className="d-flex align-items-center">
        <h2>{details.original_title}</h2>
        <span
          className={
            "col-2 p-2 badge mx-3 d-flex justify-content-center " +
            (details.vote_average > 7 ? "bg-success" : "bg-danger")
          }
        >
          {details.vote_average ? details.vote_average : "-"}
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
      </div>
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
