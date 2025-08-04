import GenAIMovieSuggestions from "./GenAIMovieSuggestions";
import GenAISearchbar from "./GenAISearchbar";
import { BGLOGO } from "../utils/constants";

const GenAISearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      
      <img
        src={BGLOGO}
        alt="bglogo"
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />

      <div className="relative z-10 pt-32">
        <GenAISearchbar />
        <GenAIMovieSuggestions />
      </div>
    </div>
  );
};

export default GenAISearch;