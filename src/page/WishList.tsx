/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useAppSelector } from "../redux/hooks";
import BookCard from "../components/BookCard";

export default function WishList() {
  const { wishlist } = useAppSelector((state) => state.book);

  let content = null;

  if (wishlist?.length === 0) {
    content = (
      <div className="text-center font-semibold text-lg poppins">
        Oops! wishlist are empty
      </div>
    );
  } else if (wishlist?.length > 0) {
    content = (
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {wishlist?.map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    );
  }

  return content;
}
