import { useEffect, useRef } from "react";
import ai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addRecommendedMovie } from "../utils/appSlice";

function GptSearchBar() {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleClick = async () => {
    console.log("SearchText->", searchText.current?.value);
    const query =
      "Act as Movie recommendation system, write down only 10 movie name which are " +
      searchText.current.value +
      " in a given format like example: Movie1,Movie2,Movie3 and no other text in answer";
    console.log(query);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: query,
    });
    console.log(response);
    dispatch(addRecommendedMovie(response.text.split(',')))
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        What would you like to watch today?
      </h1>
      <form className="w-full max-w-2xl" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            id="GptBar"
            type="text"
            ref={searchText}
            placeholder="Search for movies, shows, or ask for recommendations..."
            className="flex-1 px-6 py-4 text-lg bg-white bg-opacity-10 border border-gray-300 border-opacity-30 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
          />
          <button
            onClick={handleClick}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default GptSearchBar;
