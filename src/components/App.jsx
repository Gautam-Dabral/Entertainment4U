import React from "react";

import Header from "./Header";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import Footer from "./Footer";
import MovieDetails from "./MovieDetails";


const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [pageNo, setPageNo] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [movieDetails, setMovieDetails] = React.useState({ value: false, details: null });

  React.useEffect(() => {
    searchMovies(searchTerm, pageNo);
  }, [searchTerm, pageNo]);

  const searchMovies = async (title, page) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const getMovieDetails = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}&plot=short`);
    const detailData = await response.json();

    setMovieDetails(({
      value: true,
      details: detailData
    }));

    console.log(detailData)
  }

  const closeMovieDetails = () => {
    setMovieDetails(prevValue => ({
      value: false,
      details: {}
    }));
  }

  const handleChange = (event) => {
    setPageNo(1)
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    setPageNo(1)
    searchMovies(searchTerm, pageNo)
  }

  const handlePagination = (event) => {
    const name = event.target.name;
    setPageNo(prevValue => {
      if (name === "right") {
        return prevValue + 1
      }
      else if (name === "left" && prevValue > 1) {
        return prevValue - 1
      }
      else {
        return prevValue
      }
    })
    window.scroll(0, 0);
  }


  return (

    <div className="app">

      <Header title="Movies, Series & More" />

      <div className="search">
        <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
        <SearchButton SearchIcon={SearchIcon} handleSearch={handleSearch} />
      </div>

      {movies?.length > 0 ?
        (
          <>
          <div className="container">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} handleClick={getMovieDetails} />
            ))}
          </div>
          <div className="pagination">
          <button className="left" name="left" onClick={handlePagination}>{"<"}</button>
          <div className="page-no"><h4>{pageNo}</h4></div>
          <button className="right" name="right" onClick={handlePagination}>{">"}</button>
        </div>
        {movieDetails.value && <MovieDetails movie={movieDetails.details} handleClose={closeMovieDetails} />}
        </>
        ) :
        (
          <div className="empty">
            <h2>Input title to search!</h2>
          </div>
        )}

      <Footer />

    </div>
  );
};

export default App;
