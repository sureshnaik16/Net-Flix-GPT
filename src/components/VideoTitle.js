import { useSelector } from "react-redux";
const VideoTitle = () => {
  const mainMovie = useSelector((store) => store.movies.mainMovie);

  if (!mainMovie) return null;

  const { original_title, overview } = mainMovie;
  return (
    <div className="px-14 md:px-24 absolute w-screen h-full text-white md:aspect-video bg-gradient-to-r from-black">
      <h1 className="pt-40 text-xl md:pt-64 md:text-5xl font-bold">{original_title}</h1>
      <p className="py-1 md:py-4 text-sm md:text-lg w-3/4 md:w-2/3 ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 text-sm md:p-3 font-bold md:text-xl rounded-md hover:bg-opacity-90">
           ▷ Play
        </button>
        <button className="mx-3 mb-3 md:mb-0 bg-gray-800 font-bold text-white p-2 text-sm md:p3 bg-opacity-75 hover:bg-opacity-50 md:text-xl rounded-md">
          More Info !
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;