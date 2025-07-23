"use client";
import { useState } from "react";

export default function ReviewForm({
  onSubmit,
}: {
  onSubmit: (review: string) => void;
}) {
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    const trimmed = review.trim();
    if (!trimmed) return; 

    onSubmit(trimmed); 
    setReview(""); //clear the textarea
  };

  return (
    <div className="mt-4">
      <textarea
        className="border p-2 w-full"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}