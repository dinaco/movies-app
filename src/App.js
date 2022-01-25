import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MainView from "./components/MovieView/MainView";
import NotFoundView from "./components/NotFoundView";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

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
        <Route path="/about" element={<AboutView />} />
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
