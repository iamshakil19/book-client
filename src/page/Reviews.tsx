import React from "react";
import { IoSendSharp } from "react-icons/io5";
export default function Reviews() {
  return (
    <div className="my-16 p-5">
      <div className="">
        <form className="flex justify-center">
          <input
            type="text"
            name=""
            id=""
            className="border w-full max-w-md h-10 px-2 focus:outline-none border-slate-400 focus:border-violet-600"
            placeholder="Would you like to write anything about this book ?"
          />
          {/* <input type="submit" value="Submit" /> */}
          <button type="submit" className="text-violet-600 mx-4">
            <IoSendSharp size={30} />
          </button>
        </form>
      </div>
      <div>
        <div>
          {/* <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
