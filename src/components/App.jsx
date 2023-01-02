import React from "react";

import Header from "./Header";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import Footer from "./Footer";
// import MovieDetails from "./MovieDetails";


const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("batman");
  const [pageNo, setPageNo] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  // const [movieDetails, setMovieDetails] = React.useState({value: false , details: {}});

  React.useEffect(() => {
    searchMovies(searchTerm, pageNo);
  }, [searchTerm, pageNo]);

  const searchMovies = async (title, page) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // const getMovieDetails = async (id) => {
  //   const response = await fetch(`${API_URL}&i=${id}&plot=full`);
  //   const movieDetailsData = await response.json();
  //   setMovieDetails(prevValue => ({
  //     ...prevValue,
  //     value: true,
  //     details: movieDetailsData
  //   }));
  // }

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
  }


  return (

    <div className="app">

      <Header title="Movies, Series & More" brand="Entertainment4U" />

      <div className="search">
        <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
        <SearchButton SearchIcon={SearchIcon} handleSearch={handleSearch} />
      </div>

      {movies?.length > 0 ?
        (
          <div className="container">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

      <div className="pagination">
        <button className="left" name="left" onClick={handlePagination}>{"<"}</button>
        <div className="page-no"><h4>{pageNo}</h4></div>
        <button className="right" name="right" onClick={handlePagination}>{">"}</button>
      </div>

      <Footer />

      {/* {movieDetails.value && <MovieDetails />} */}
    </div>
  );
};

export default App;
