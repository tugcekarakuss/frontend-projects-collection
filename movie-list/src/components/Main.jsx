import { useState } from "react";

export default function Main({ movies, selectedMovies }) {

    const getAverage = (arr) =>
        arr.length === 0
            ? 0
            : arr.reduce((sum, val) => sum + val, 0) / arr.length;

    const [isOpenMovies, setIsOpenMovies] = useState(true);
    const [isOpenList, setIsOpenList] = useState(true);

    const avgRating = getAverage(selectedMovies.map(m => m.rating));
    const avgDuration = getAverage(selectedMovies.map(m => m.duration));

    return (
        <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* ALL MOVIES */}
            <div className="col-span-12 md:col-span-9 order-2 md:order-1">

                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-300">
                        All Movies
                    </h2>

                    <button
                        onClick={() => setIsOpenMovies(v => !v)}
                        className="text-gray-400 hover:text-white border w-8 h-8 flex items-center justify-center rounded-lg"
                    >
                        {isOpenMovies ? "▲" : "▼"}
                    </button>
                </div>

                {isOpenMovies && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {movies.map(movie => (
                            <div
                                key={movie.id}
                                className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer shadow-lg"
                            >
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-72 object-cover"
                                />

                                <div className="p-3">
                                    <h3 className="text-sm font-semibold">
                                        {movie.title}
                                    </h3>

                                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                        📅 <span>{movie.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* MY LIST */}
            <div className="col-span-12 md:col-span-3 order-1 md:order-2">

                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-300">
                        My List
                    </h2>

                    <button
                        onClick={() => setIsOpenList(v => !v)}
                        className="text-gray-400 hover:text-white border w-8 h-8 flex items-center justify-center rounded-lg"
                    >
                        {isOpenList ? "▲" : "▼"}
                    </button>
                </div>

                {/* SUMMARY */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow-lg">
                    <h2 className="text-sm font-semibold mb-3">
                        Added [{selectedMovies.length}] movies to the list
                    </h2>

                    <div className="flex justify-between text-sm text-gray-400">
                        <span>⭐ {avgRating.toFixed(2)}</span>
                        <span>⏱ {avgDuration.toFixed(2)} dk</span>
                    </div>
                </div>

                {/* LIST */}
                {isOpenList && selectedMovies.map(movie => (
                    <div
                        key={movie.id}
                        className="bg-gray-900 rounded-xl mb-3 shadow-md hover:bg-gray-800 transition"
                    >
                        <div className="flex">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-20 h-28 object-cover"
                            />

                            <div className="p-3 flex flex-col justify-between w-full">
                                <h3 className="text-sm font-semibold">
                                    {movie.title}
                                </h3>

                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>⭐ {movie.rating}</span>
                                    <span>⏱ {movie.duration} dk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    );
}