import { AiOutlineClockCircle } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { FcLikePlaceholder, FcLike, FcBookmark } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";


export default function BookCard() {
  return (
    <div className="card mx-auto card-compact               bg-base-100 shadow-xl w-64 md:w-72">
      <figure>
        <img
          className="h-56 w-full object-cover object-bottom"
          src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Nineteen Eighty-Four</h2>
        <p className="font-bold text-slate-500">Shakil Ahmed</p>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span>
              <AiOutlineClockCircle size={20} />
            </span>
            <span title="publication date"  className="mt-1">14 Jul, 2023</span>
          </p>

          <div>
            <p title="genre"  className="badge badge-outline">Fiction</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div></div>
          <div>
            <button title="wishlist" className="text-red-600"><FcBookmark size={27} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
