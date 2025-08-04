import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className=" pl-2 z-20 relative mt-28 md:-mt-52">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
        <MovieList title="Upcoming" movies={movies.upcomingMovies}/>        
        <MovieList title="Popular" movies={movies.popularMovies}/>     
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
};

export default SecondaryContainer;