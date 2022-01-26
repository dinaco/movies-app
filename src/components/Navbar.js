import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ setSearchText }) => {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    navigate("/search");
    setSearchText(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="somewherenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Genres
              </span>
              <div
                className="dropdown-menu animate slideIn"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item border-bottom" to="/genre/28">
                  Action
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/12">
                  Adventure
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/16">
                  Animation
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/35">
                  Comedy
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/14">
                  Fantasy
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/27">
                  Horror
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/878">
                  Science Fiction
                </Link>
                <Link className="dropdown-item border-bottom" to="/genre/53">
                  Thriller
                </Link>
                <Link className="dropdown-item" to="/genre/10752">
                  War
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/somewhere">
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
