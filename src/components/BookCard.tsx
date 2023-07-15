/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { FcLikePlaceholder, FcBookmark } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { IBookResponse } from "../types/globalTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToWishlist } from "../redux/features/book/bookSlice";

const defaultImage =
  "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

export default function BookCard({ book }: { book: IBookResponse }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { title, author, genre, creator, _id, publication, image } = book || {};

  const { wishlist } = useAppSelector((state) => state.book);
  const isIncluded: boolean = wishlist.some((item) => item._id == _id);
  console.log(isIncluded);

  return (
    <div className="card mx-auto card-compact               bg-base-100 shadow-xl w-64 md:w-72">
      <figure>
        <img
          onClick={() => navigate(`/books/${_id}`)}
          className="h-56 w-full object-cover cursor-pointer"
          src={image ? image : defaultImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2
          onClick={() => navigate(`/books/${_id}`)}
          className="card-title cursor-pointer capitalize"
        >
          {title}
        </h2>
        <p className="font-bold text-slate-500 capitalize">{author}</p>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span>
              <AiOutlineClockCircle size={20} />
            </span>
            <span title="publication date" className="mt-1">
              {publication}
            </span>
          </p>

          <div>
            <p title="genre" className="badge badge-outline capitalize">
              {genre}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div></div>
          <div>
            <button
              onClick={() => dispatch(addToWishlist(book))}
              title="wishlist"
              className="text-red-600"
            >
              {isIncluded ? (
                <FcBookmark size={27} />
              ) : (
                <CiBookmark size={27} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
