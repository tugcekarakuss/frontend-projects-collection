export default function Navbar({ moviesCount }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        <div className="text-lg font-semibold">
          Movie App
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-800 px-3 py-2 rounded-lg"
        />

        <div className="text-sm text-gray-400">
          <span className="text-white font-semibold">
            {moviesCount}
          </span>{" "}
          movies found
        </div>

      </div>
    </nav>
  );
}