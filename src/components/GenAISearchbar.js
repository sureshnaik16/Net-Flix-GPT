import { useRef } from "react";
import GenAI from "../utils/GenAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGenAITMDBMovieSuggestions} from "../utils/GenAISlice";

const GenAISearchbar = () => {

  const dispatch = useDispatch()

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGeminiSearchClick = async () => {
    const context = searchText.current.value;
    const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      `Think like you're a movie recommendation system that suggests exactly 5 movie titles based on a given 
      context and make sure the movies are comma seperated: "${context}". Example: Bhadra, Legend, Jai Lava Kusa, 
      Snehithudu, Om. Just list 5 titles in plain text. Not even a word extra like "Golmaal (1979)". Please, make 
      sure of the spellings correct, like for "Nuvve Kavali" don't give "Nuve Kavali", for "Journey" don't give 
      "Joursney".`;

    try {
      const result = await model.generateContent(prompt);
      const output = await result.response.text();

      const GenAIMovies = output.split(",");
      const promiseArray = GenAIMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGenAITMDBMovieSuggestions({movieNames:GenAIMovies, movieResults:tmdbResults}));
    }
    catch (error) {
      alert("⚠️ Gemini API is returning" +error+ ". Please try again in a few minutes.");
    } 
  };


  return (
    <div className="-mt-9 mb-5 md:mt-0 pt-5 flex justify-center">
        <form className="w-full ml-5 mr-5 md:ml-0 md:mr-0 md:w-1/2 bg-black grid grid-cols-12 bg-opacity-55 rounded-md"
          onSubmit={(e) => e.preventDefault()}>
            <input
                ref={searchText}
                type="text"
                className="p-4 m-4 col-span-9"
                placeholder="What would you like to watch now?"
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
              onClick={handleGeminiSearchClick}>
                Search
            </button>
        </form>
    </div>
  );
};

export default GenAISearchbar;