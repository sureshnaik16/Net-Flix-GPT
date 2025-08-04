import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GenAIMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.GenAI);
  if (!movieNames) return null;
  return (
    <div className="bg-black text-white bg-opacity-95">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))}
      </div>
      
    </div>
  )
};

export default GenAIMovieSuggestions;