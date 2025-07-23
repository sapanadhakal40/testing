import { Movie } from '../types';

export function getTopMovies(movies: Movie[]): Movie[] {
  // Filter movies with a rating of 4.5 or higher
  return movies.filter((movie) => movie.rating >= 4.5);
}