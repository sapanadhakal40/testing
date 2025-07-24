import { ReviewProvider, useReviewContext } from "../context/ReviewContext";
import { act, renderHook } from "@testing-library/react";

describe ("useReviewContext", () => {
  it("initially has an empty reviews list", () => {
		const { result } = renderHook(() => useReviewContext(), {
    wrapper : ReviewProvider,});
		expect(result.current.reviews).toEqual([]);
	});
  // Test adding a review
	it("can add a review", () => {
   //get the context
		const { result } = renderHook(() => useReviewContext(), {
			wrapper: ReviewProvider,
		});
	// Use act to ensure state updates are handled correctly
		act(() => {
			result.current.addReview(1, "Great movie!");
		});
    const expectedReview = { 
			id: expect.any(Number), 
			movieId: 1,
			text: "Great movie!"
		};
		// Check if the review was added correctly
		expect(result.current.reviews).toHaveLength(1);
		expect(result.current.reviews[0]).toEqual(expectedReview);
	});

 //clears the reviews
	it("can clear all reviews", () => {
		const { result } = renderHook(() => useReviewContext(), {
			wrapper: ReviewProvider,
		});
		act(() => {
			result.current.addReview(1, "Great movie!");
      result.current.clearReviews();
	});
		expect(result.current.reviews).toEqual([]);
	});
});