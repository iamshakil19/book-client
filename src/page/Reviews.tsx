import React from "react";
import { IoSendSharp } from "react-icons/io5";
import ReviewCard from "../components/ReviewCard";
export default function Reviews() {
  return (
    <div className="my-16 p-5">
      <div className="">
        <form className="flex justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border w-full max-w-2xl h-10 px-2 focus:outline-none border-slate-400 focus:border-violet-600"
            placeholder="Would you like to write anything about this book ?"
          />
          {/* <input type="submit" value="Submit" /> */}
          <button type="submit" className="text-violet-600 mx-4">
            <IoSendSharp size={30} />
          </button>
        </form>
      </div>

      <div className="mx-auto max-w-3xl mt-10">
        <h2 className="font-semibold text-xl font-">Reviews</h2>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
