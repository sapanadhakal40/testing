"use client";
import ReviewForm from "@/app/components/ReviewForm";
import { useState } from "react";

const movieData = {
	title: "Inception",
	rating: 4.8,
  reviews: ["Amazing movie!", "Mind-blowing!"],
};

export default function MoviePage() {
  const [reviews, setReviews] = useState(movieData.reviews);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{movieData.title}</h1>
      <p className="text-gray-600">⭐ {movieData.rating} / 5</p>

      <h2 className="text-xl mt-4">Reviews</h2>
      <ul className="list-disc ml-4">
        {reviews?.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

      <ReviewForm
        onSubmit={(newReview) => {
          setReviews([...reviews, newReview]);
        }}
      />
		</div>
  );
}
