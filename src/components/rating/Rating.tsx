import React from "react";
import "./rating.scss";
import { StarEmpty, StarFull, StarHalf } from "@src/assets/icons/icons.tsx";

type TRating = {
  rating: number;
};

const Rating: React.FC<TRating> = ({ rating }) => {
  const rate = rating / 2;

  const index = Math.min(Math.floor(rate), 4);
  const label = ["Bad", "Poor", "Good", "Very Good", "Excellent"];

  const stars = Array.from({ length: 5 }, (_, index: number) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <StarFull />
        ) : rate >= number ? (
          <StarHalf />
        ) : (
          <StarEmpty />
        )}
      </span>
    );
  });

  return (
    <ul>
      <li>{rating}</li>
      <li>
        <b>{label[index]}</b>
      </li>
      <li>{stars}</li>
    </ul>
  );
};

export default Rating;
