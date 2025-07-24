import { Review, ReviewContextType } from '../types';
import React, { createContext, useState, useContext } from 'react';

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);
export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [reviews, setReviews] = useState<Review[]>([]);

	// Function to add a new review
	const addReview = (movieId: number, text: string) => {
		const newReview: Review = {
			id: Date.now(), 
			movieId,
			text,
		};
		setReviews((prev) => [...prev, newReview]);
	};

  //clear all reviews
	const clearReviews = () => {
		setReviews([]);
	};

	return (
		<ReviewContext.Provider value={{ reviews, addReview, clearReviews }}>
			{children}
		</ReviewContext.Provider>
	);
};
export const useReviewContext = () => {
	const context = useContext(ReviewContext);
	if (!context) {
		throw new Error("useReviewContext must be used within a ReviewProvider");
	}
	return context;
};
