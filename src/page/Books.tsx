/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import {
  handleGenreFilter,
  handlePublicationFilter,
  handleSearchTerm,
} from "../redux/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import { FcDatabase } from "react-icons/fc";

export default function Books() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { searchTerm, filterByGenre, filterByPublication } = useAppSelector(
    (state) => state.book
  );

  let queryString = `searchTerm=${searchTerm}`;

  if (filterByGenre) {
    queryString += `&genre=${filterByGenre}`;
  }
  if (filterByPublication) {
    queryString += `&publication=${filterByPublication}`;
  }

  const { data: allBooks, isLoading, isError } = useGetBooksQuery(queryString);
  const { data } = allBooks || {};

  const years = [...new Set(data?.map(item => item.publication))]

  // const years = data?.map((item) => item.publication);
  console.log(years);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="Something went wrong" />;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = (
      <div className="text-center font-semibold text-lg poppins">
        Oops! No book found
      </div>
    );
  } else if (!isLoading && !isError && data?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 px-5 mt-5">
        {data?.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto z-20">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div>
            <div className=" px-5 flex items-center justify-between">
              <button
                className="bg-slate-300 px-3 py-1 rounded-md"
                onClick={() => navigate("/add-new-book")}
              >
                Add Book
              </button>
              <input
                onChange={(e) => dispatch(handleSearchTerm(e.target.value))}
                value={searchTerm}
                type="text"
                placeholder="Search"
                className="input w-full max-w-xs h-10 focus:outline-none border-violet-600"
              />
            </div>
          </div>
          {content}
          <label
            htmlFor="my-drawer-2"
            className={`bg-[#f9a51a] font-poppins text-white py-1.5 px-4 text-md rounded-md shadow-md fixed bottom-5 left-[50%] -translate-x-2/4 z-0 flex items-center lg:hidden 
    }`}
          >
            Filter
          </label>
        </div>
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-64 h-screen bg-base-200 text-base-content z-20">
            {/* Sidebar content here */}
            <div>
              <p className="text-base font-medium">Genre</p>
              <p className="border mt-1 border-slate-200"></p>

              <select
                onChange={(e) => dispatch(handleGenreFilter(e.target.value))}
                className="w-full mt-2 h-7 text-base border "
                defaultValue={filterByGenre}
              >
                <option className="" value={""}>
                  Default
                </option>
                <option className="" value={"fiction"}>
                  Fiction
                </option>
                <option className="" value={"fantasy"}>
                  Fantasy
                </option>
                <option className="" value={"science"}>
                  Science
                </option>
                <option className="" value={"action"}>
                  Action
                </option>
                <option className="" value={"mystery"}>
                  Mystery
                </option>
                <option className="" value={"horror"}>
                  Horror
                </option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium mt-5">Publication Year</p>
              <p className="border mt-1 border-slate-200"></p>

              <select
                onChange={(e) =>
                  dispatch(handlePublicationFilter(e.target.value))
                }
                className="w-full mt-2 h-7 text-base border "
                // defaultValue={filterByPublication}
              >
                <option className="" selected={filterByPublication == ""} value={""}>
                  Default
                </option>
                {years?.length > 0 &&
                  years?.map((year) => (
                    <option selected={filterByPublication == year} className="" value={year}>
                      {" "}
                      {year}{" "}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
