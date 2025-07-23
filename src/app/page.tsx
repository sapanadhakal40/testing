import MovieCard from "./components/MovieCard";
import { getTopMovies } from "../../utils/helpers";
import { movies } from "../../utils/movieData";

export default function Home() {
  return (
  <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Movie Reviews</h1>
      <h2 className="text-2xl font-semibold mt-4">Top Rated Movies</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {getTopMovies(movies).map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
	</main>
  );
}
