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
          data-bs-target="#navbarSupportedContent"
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
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/action"
                  state={{ linkId: 28 }}
                >
                  Action
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/adventure"
                  state={{ linkId: 12 }}
                >
                  Adventure
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/animation"
                  state={{ linkId: 16 }}
                >
                  Animation
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/comedy"
                  state={{ linkId: 35 }}
                >
                  Comedy
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/fantasy"
                  state={{ linkId: 14 }}
                >
                  Fantasy
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/horror"
                  state={{ linkId: 27 }}
                >
                  Horror
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/sci-fi"
                  state={{ linkId: 878 }}
                >
                  Sci-Fi
                </Link>
                <Link
                  className="dropdown-item border-bottom"
                  to="/genre/thriller"
                  state={{ linkId: 53 }}
                >
                  Thriller
                </Link>
                <Link
                  className="dropdown-item"
                  to="/genre/war"
                  state={{ linkId: 10752 }}
                >
                  War
                </Link>
              </div>
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
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
