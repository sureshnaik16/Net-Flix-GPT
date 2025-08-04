import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { setMainMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
const MainContainer = () => {
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const mainMovie = useSelector((store) => store.movies?.mainMovie);
     useEffect(() => {
        if (!mainMovie && movies) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        dispatch(setMainMovie(randomMovie));
        }
    }, [mainMovie, movies, dispatch]);

  if (!mainMovie) return null;

    return (
        <div>
            
            <VideoTitle/>
            <VideoBackground movieId={mainMovie.id} />

        </div>
    );
};

export default MainContainer;