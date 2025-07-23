import { getTopMovies } from "./helpers";

describe('getTopMovies', () => {
const allmovies = [
	{ title: "Titanic", rating: 4.5, imageUrl: "https://via.placeholder.com/150" },
	{ title: "Shutter Island", rating: 4.0, imageUrl: "https://via.placeholder.com/150" },
	{ title: "Parasite", rating: 5.0, imageUrl: "https://via.placeholder.com/150" },
	{ title: "Inception", rating: 4.8, imageUrl: "https://via.placeholder.com/150" },
	{ title: "The Dark Knight", rating: 4.9, imageUrl: "https://via.placeholder.com/150" },
];


  it('should return movies with a rating of 4.5 or higher', () => {
  const topMovies = getTopMovies(allmovies);
		expect(topMovies).toEqual([
			{ title: "Titanic", rating: 4.5, imageUrl: "https://via.placeholder.com/150" },
			{ title: "Parasite", rating: 5.0, imageUrl: "https://via.placeholder.com/150" },
			{ title: "Inception", rating: 4.8, imageUrl: "https://via.placeholder.com/150" },
			{ title: "The Dark Knight", rating: 4.9, imageUrl: "https://via.placeholder.com/150" },
		]);
    expect(topMovies.length).toBe(4);
	});
  it('should return an empty array if no movies meet the criteria', () => {
		const lowRatedMovies = [
			{ title: "Shutter Island", rating: 4.0, imageUrl: "https://via.placeholder.com/150" }
		];
		// expect(getTopMovies(lowRatedMovies)).toEqual([]);
		const topMovies = getTopMovies(lowRatedMovies);
		expect(topMovies).toEqual([]);
	});
	it('should return an empty array if no movies are provided', () => {
		const topMovies = getTopMovies([]);
		expect(topMovies).toEqual([]);
	});
});