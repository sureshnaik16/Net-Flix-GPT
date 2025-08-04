import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      
      <iframe className="w-screen -mt-24 aspect-video"
        src={"https://www.youtube.com/embed/"+
          trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&fs=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
      />
      
    </div>
  );

};

export default VideoBackground;