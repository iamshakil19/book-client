import React from "react";
import BookCard from "../components/BookCard";

export default function HomeBook() {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
