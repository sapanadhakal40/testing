import MovieCard from "./components/MovieCard";

type Movie = {
	title: string;
	rating: number;
	imageUrl: string;
};
const movies: Movie[] = [
	{title: "Inception", rating: 4.8, imageUrl:"https://c8.alamy.com/comp/2C4X083/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X083.jpg",
  },
	{title: "Interstellar", rating: 4.6, imageUrl:"https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F3%2Fgracenote%2F3ca13d8c8155b6e3242b03df4f420484.jpg",
},
	{title: "Dunkirk", rating: 4.5, imageUrl: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg",
},
];

function getTopMovies(movies: Movie[]): Movie[] {
  return movies.filter(movie => movie.rating >= 4.5)
}

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
