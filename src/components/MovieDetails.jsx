import "./MovieDetails.css"
// {
//     "Title": "Lego Batman: The Movie - DC Super Heroes Unite",
//     "Year": "2013",
//     "Rated": "Not Rated",
//     "Released": "21 May 2013",
//     "Runtime": "71 min",
//     "Genre": "Animation, Action, Adventure, Family, Sci-Fi",
//     "Director": "Jon Burton",
//     "Writer": "Jon Burton (story), David A. Goodman (story), David A. Goodman (screenplay), Bob Kane (character created by: Batman), Jerry Siegel (character created by: Superman), Joe Shuster (character created by: Superman), William Moulton Marston (character created by: Wonder Woman), Marv Wolfman (character created by: Cyborg), George Pérez (character created by: Cyborg), Paul Dini (character created by: Harley Quinn), Bruce Timm (character created by: Harley Quinn), Joe Samachson (character created by: Martian Manhunter), Joe Certa (character created by: Martian Manhunter), Chuck Dixon (character created by: Bane), Doug Moench (character created by: Bane), Graham Nolan (character created by: Bane)",
//     "Actors": "Clancy Brown, Troy Baker, Christopher Corey Smith, Charlie Schlatter",
//     "Plot": "Presidential Candidate Lex Luthor teams up with the joker to destroy Batman and Superman while becoming president. Will the duo of Batman and Superman win or will they be taken down and destroyed with the rest of the justice league. Based On The Thrilling Video Game Lego Batman 2 DC super heroes.",
//     "Language": "English",
//     "Country": "USA, UK, Denmark",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjOGU2NzUtMjAwOC00MDI3LThmNmUtNTVkZTQ0MDEyYTc1XkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "6.5/10"
//         }
//     ],
//     "Metascore": "N/A",
//     "imdbRating": "6.5",
//     "imdbVotes": "4,864",
//     "imdbID": "tt2465238",
//     "Type": "movie",
//     "DVD": "21 May 2013",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }


export default function MovieDetails(props) {
    return (
        <div className="background">
            <div className="close"><button onClick={props.handleClose}>X</button></div>
            <div className="movie-details">
                <h2 className="title">{props.movie.Title}</h2>
                <h4 className="type">Type - {props.movie.Type}</h4>
                <h4 className="year">Year - {props.movie.Year}</h4>
                {/* <h4 className="runtime">Runtime - {props.movie.Runtime}</h4> */}
                <div className="flex-details">
                <h4 className="rating">{props.movie.imdbRating}</h4>
                <div className="poster">
                    <img src={props.movie.Poster} alt={props.movie.Title} />
                </div>
                <div className="info">
                    <h4 className="released">Released - {props.movie.Released}</h4>
                    <h4 className="genre">Genre : {props.movie.Genre}</h4>
                    <p className="plot"><strong>Plot</strong> - {props.movie.Plot}</p>
                    <h4 className="director">Director - {props.movie.Director}</h4>
                    <p className="writer">{"Writer(s)"} - {props.movie.Writer}</p>
                    <h4 className="cast">Cast - {props.movie.Cast}</h4>
                    <h4 className="awards">Awards - {props.movie.Awards}</h4>
                </div>
                </div>
            </div>
        </div>
    )
};
