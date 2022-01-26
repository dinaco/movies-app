import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchView from "./components/SearchView";
import MainView from "./components/MovieView/MainView";
import GenreView from "./components/GenreView";
import NotFoundView from "./components/NotFoundView";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results));
    }
  }, [searchText]);

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <Routes>
        <Route path="*" element={<NotFoundView />} />
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/genre/:id" element={<GenreView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MainView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
