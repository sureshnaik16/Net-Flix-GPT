import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import Header from './Header';
import { useSelector } from "react-redux";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import GenAISearch from './GenAISearch';

const Browse = () => {

  // const user = useSelector((store) => store.user);
  const showGenAISearch = useSelector((store) => store.GenAI.showGenAISearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header/>
      {showGenAISearch ? (<GenAISearch/>) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      
      {/*<h1 className="font-bold relative text-green-400 m-10 absolute text-5xl">
        Welcome to Browse Page, {user?.displayName}
      </h1> */}

      </div>
  );

};

export default Browse; 