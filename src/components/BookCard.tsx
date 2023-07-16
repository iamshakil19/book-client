/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { FcBookmark } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { IBookResponse } from "../types/globalTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addToReading,
  addToWishlist,
  handleStatus,
} from "../redux/features/book/bookSlice";
import { BsBook, BsBookHalf, BsBookFill } from "react-icons/bs";
const defaultImage =
  "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

export default function BookCard({ book }: { book: IBookResponse }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { title, author, genre, creator, _id, publication, image } = book || {};

  const { wishlist, reading } = useAppSelector((state) => state.book);
  const wishlistIncluded: boolean = wishlist.some((item) => item._id == _id);
  const readingIncluded: boolean = reading.some((item) => item._id == _id);

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
          title="Title"
          onClick={() => navigate(`/books/${_id}`)}
          className="card-title cursor-pointer capitalize"
        >
          {title}
        </h2>
        <p title="Author" className="font-bold text-slate-500 capitalize">
          {author}
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span>
              <AiOutlineClockCircle size={20} />
            </span>
            <span title="Publication date" className="mt-1">
              {publication}
            </span>
          </p>

          <div>
            <p title="Genre" className="badge badge-outline capitalize">
              {genre}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div>
            <button
              onClick={() => dispatch(addToReading(book))}
              title="Currently reading"
              className="text-violet-600"
            >
              {readingIncluded ? (
                <BsBookHalf size={24} />
              ) : (
                <BsBook size={24} />
              )}
            </button>
          </div>
          {book.status && location.pathname === "/currently-reading" && (
            <div>
              <select
                onChange={(e) =>
                  dispatch(handleStatus({ _id, status: e.target.value }))
                }
                name=""
                id=""
                className={`border ${
                  book.status === "completed" ? "bg-green-200" : "bg-slate-200"
                } rounded-full p-0.5 focus:outline-none cursor-pointer`}
              >
                <option value="running">Running</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          )}
          <div>
            <button
              onClick={() => dispatch(addToWishlist(book))}
              title="Wishlist"
              className="text-red-600"
            >
              {wishlistIncluded ? (
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
