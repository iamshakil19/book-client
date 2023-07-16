/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLoggedOut } from "../redux/features/auth/authSlice";
import { handleSearchTerm } from "../redux/features/book/bookSlice";

export default function Navbar() {
  const location = useLocation();
  const isLoggedIn = useAuth();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.book);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  return (
    <div className="drawer fixed top backdrop-blur-lg bg-white/60 z-20 lg:z-30">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full container mx-auto navbar  flex justify-between items-center">
          <div className="flex-none lg:hidden">
            <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 lg:flex-none px-2 mx-2">
            <Link to="/">Book Catalog</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className=" menu-horizontal">
              {/* Navbar menu content here */}
              <Link to="/books">
                <li
                  className={`${
                    location.pathname === "/books"
                      ? "bg-violet-600 text-white"
                      : "bg-slate-200"
                  } text-sm rounded-md mx-2 py-1.5 font-medium w-28 text-center`}
                >
                  All Books
                </li>
              </Link>

              <Link to="/wishlist">
                <li
                  className={`${
                    location.pathname === "/wishlist"
                      ? "bg-violet-600 text-white"
                      : "bg-slate-200"
                  } text-sm rounded-md mx-2 py-1.5 font-medium w-28 text-center`}
                >
                  Wishlist
                </li>
              </Link>

              {isLoggedIn && (
                <Link to="/add-new-book">
                  <li
                    className={`${
                      location.pathname === "/add-new-book"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-200"
                    } text-sm rounded-md mx-2 py-1.5 font-medium w-28 text-center`}
                  >
                    Add Book
                  </li>
                </Link>
              )}
            </ul>
          </div>
          <div className="hidden lg:flex gap-2">
            {isLoggedIn && <span className="font-medium">{user!.name}</span>}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow-md border menu menu-sm dropdown-content bg-slate-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/currently-reading"
                    className="justify-between py-2 mb-2 font-medium"
                  >
                    Currently Reading
                  </Link>
                </li>
                {isLoggedIn ? (
                  <li>
                    <span
                      onClick={handleLogout}
                      className="py-2 mb-1 font-medium hover:bg-red-500 hover:text-white "
                    >
                      Logout
                    </span>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="py-2 mb-2 font-medium hover:bg-violet-600 hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {/* Content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 h-full bg-black text-white">
          {/* Sidebar content here */}

          <p className="text-center text-lg mb-5">Book Catalog</p>
          <Link to="/books">
            <li
              className={`${
                location.pathname === "/books" ? "bg-slate-500" : "bg-slate-900"
              }  rounded-md py-1.5 px-3 mb-2`}
            >
              All Books
            </li>
          </Link>

          <Link to="/wishlist">
            <li
              className={`${
                location.pathname === "/wishlist"
                  ? "bg-slate-500"
                  : "bg-slate-900"
              }  rounded-md py-1.5 px-3 mb-2`}
            >
              Wishlist
            </li>
          </Link>
          <Link to="/currently-reading">
            <li
              className={`${
                location.pathname === "/currently-reading"
                  ? "bg-slate-500"
                  : "bg-slate-900"
              }  rounded-md py-1.5 px-3 mb-2`}
            >
              Currently Reading
            </li>
          </Link>

          {isLoggedIn && (
            <Link to="/add-new-book">
              <li
                className={`${
                  location.pathname === "/add-new-book"
                    ? "bg-slate-500"
                    : "bg-slate-900"
                }  rounded-md py-1.5 px-3 mb-2`}
              >
                Add Book
              </li>
            </Link>
          )}

          <div className="my-10"></div>
          {isLoggedIn ? (
            <li
              onClick={handleLogout}
              className="bg-red-600 rounded-md py-1.5 px-3 mb-2"
            >
              Logout
            </li>
          ) : (
            <Link to="/login">
              <li className="bg-violet-600 rounded-md py-1.5 px-3 mb-2">
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
