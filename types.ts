export type Movie = {
  title: string;
  rating: number;
  imageUrl: string;
};

export type Review = {
  id: number;
  movieId: number;
  text: string;
};

export type ReviewContextType = {
  reviews: Review[];
  addReview: (movieId: number, text: string) => void;
  clearReviews: () => void;
};