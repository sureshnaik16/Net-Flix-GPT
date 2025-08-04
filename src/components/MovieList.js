import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="w-screen overflow-hidden">
      <h1 className="p-5 font-sans pb-2 text-2xl -mt-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex pl-4 "> {
          movies?.map(
            movie => <MovieCard title={movie.title} key={movie.id} posterPath={movie.poster_path}/>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
