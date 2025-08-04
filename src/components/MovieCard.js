import { IMG_CARD_URL } from "../utils/constants";


const MovieCard = ({title, posterPath}) => {
    if (!posterPath) return null;
    return (
        <div className="w-40 pr-4">
            <img alt={title} src = {IMG_CARD_URL+posterPath}/>
        </div>
    );
};

export default MovieCard;