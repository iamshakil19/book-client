/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

export default function Books() {
  const queryString = "";

  const { data: allBooks, isLoading, isError } = useGetBooksQuery(queryString);
  const { data } = allBooks || {};

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
      <div className="container mx-auto z-20">
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5 mt-5">
              {data?.map((book) => (
                <BookCard book={book} key={book._id} />
              ))}
            </div>
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
            <ul className="menu p-4 w-64 h-screen bg-base-200 text-base-content z-20">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return content;
}
