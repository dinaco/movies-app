import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} extrainfo={true} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHTML && (
        <div className="container">
          <div className="row">
            {resultsHTML.length ? (
              resultsHTML
            ) : (
              <div className="alert alert-warning my-4" role="alert">
                No movies found for: <strong>{keyword}</strong>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchView;
