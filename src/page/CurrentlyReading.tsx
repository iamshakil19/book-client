import React from "react";
import BookCard from "../components/BookCard";
import { useAppSelector } from "../redux/hooks";

export default function CurrentlyReading() {
  const { reading } = useAppSelector((state) => state.book);

  let content = null;

  if (reading?.length === 0) {
    content = (
      <div className="text-center font-semibold text-lg poppins">
        Oops! reading list are empty
      </div>
    );
  } else if (reading?.length > 0) {
    content = (
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reading?.map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    );
  }

  return content;
}
