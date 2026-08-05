import { useState } from "react";
import { movieList, selected_movie_list } from "../data";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "/src/App.css"

export default function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar moviesCount={movies.length} />
      <Main
        movies={movies}
        selectedMovies={selectedMovies}
      />
    </div>
  );
}