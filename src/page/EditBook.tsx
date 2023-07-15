/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { toast } from "react-hot-toast";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

export default function EditBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { data: bookData, isLoading, isError } = useGetSingleBookQuery(id);
  const {
    _id,
    title: initialTitle,
    author: initialAuthor,
    genre: initialGenre,
    publication: initialPublication,
    image: initialImage,
    summary: InitialSummary,
  } = bookData?.data || {};

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [updateBook, { isSuccess }] = useUpdateBookMutation();

  const onSubmit = (data: any) => {
    updateBook({ id, data });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book Updated", { id: "edit-book" });
      navigate("/books");
    }
  }, [isSuccess, navigate]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message="Something went wrong" />;
  } else if (!isLoading && !isLoading && _id) {
    content = (
      <div className="container mx-auto px-5">
        <h2 className="text-center text-2xl font-semibold pt-10">Edit Book</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-sm mx-auto mt-10 pb-20">
            <div>
              <h3 className="poppins text-base font-medium mb-2 ">Title</h3>
              <input
                placeholder="Type book title"
                type="text"
                defaultValue={initialTitle}
                className={`border w-full outline-none  py-2 px-3 ${
                  errors.title
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
              />
              {errors.title && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <h3 className="poppins text-base font-medium mb-2 mt-2 ">
                Author
              </h3>
              <div className="">
                <input
                  placeholder="Type author name"
                  type="text"
                  defaultValue={initialAuthor}
                  className={`border w-full outline-none py-2 px-3 ${
                    errors.author
                      ? " border-red-500 focus:border-red-500"
                      : "focus:border-slate-700 border-slate-300"
                  }`}
                  {...register("author", {
                    required: {
                      value: true,
                      message: "Author is required",
                    },
                  })}
                />
              </div>
              {errors.author && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.author.message}
                </span>
              )}
            </div>
            <div>
              <h3 className="poppins text-base font-medium mb-2 mt-2 ">
                Genre
              </h3>
              <div className="">
                <select
                  defaultValue={initialGenre}
                  placeholder="Select genre name"
                  className={`border w-full outline-none py-2 px-3 ${
                    errors.genre
                      ? " border-red-500 focus:border-red-500"
                      : "focus:border-slate-700 border-slate-300"
                  }`}
                  {...register("genre", {
                    required: {
                      value: true,
                      message: "Genre is required",
                    },
                  })}
                >
                  <option className="" disabled value={""}>
                    Select Genre
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
              {errors.genre && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.genre.message}
                </span>
              )}
            </div>
            <div>
              <h3 className="poppins text-base font-medium mb-2 mt-2 ">
                Publication Year
              </h3>
              <div className="">
                <select
                  defaultValue={initialPublication}
                  placeholder="Select publication year"
                  className={`border w-full outline-none py-2 px-3 ${
                    errors.publication
                      ? " border-red-500 focus:border-red-500"
                      : "focus:border-slate-700 border-slate-300"
                  }`}
                  {...register("publication", {
                    required: {
                      value: true,
                      message: "Publication is required",
                    },
                  })}
                >
                  <option className="" disabled value={""}>
                    Select Year
                  </option>
                  <option className="" value={"2010"}>
                    2010
                  </option>
                  <option className="" value={"2011"}>
                    2011
                  </option>
                  <option className="" value={"2012"}>
                    2012
                  </option>
                  <option className="" value={"2013"}>
                    2013
                  </option>
                  <option className="" value={"2014"}>
                    2014
                  </option>
                  <option className="" value={"2015"}>
                    2015
                  </option>
                  <option className="" value={"2016"}>
                    2016
                  </option>
                  <option className="" value={"2017"}>
                    2017
                  </option>
                  <option className="" value={"2018"}>
                    2018
                  </option>
                  <option className="" value={"2019"}>
                    2019
                  </option>
                  <option className="" value={"2020"}>
                    2020
                  </option>
                  <option className="" value={"2021"}>
                    2021
                  </option>
                  <option className="" value={"2022"}>
                    2022
                  </option>
                  <option className="" value={"2023"}>
                    2023
                  </option>
                </select>
              </div>
              {errors.publication && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.publication.message}
                </span>
              )}
            </div>
            <div>
              <h3 className="poppins text-base font-medium mb-2 mt-2 ">
                Image
              </h3>
              <div className="">
                <input
                  placeholder="Image link ( Optional )"
                  type="text"
                  defaultValue={initialImage}
                  className={`border w-full outline-none py-2 px-3 focus:border-slate-700 border-slate-300`}
                  {...register("image")}
                />
              </div>
            </div>
            <div>
              <h3 className="poppins text-base font-medium mb-2 mt-2 ">
                Summary
              </h3>
              <div className="">
                <textarea
                  defaultValue={InitialSummary}
                  placeholder="Summary ( Optional )"
                  type="text"
                  className={`border w-full outline-none py-2 px-3 focus:border-slate-700 border-slate-300`}
                  {...register("summary")}
                />
              </div>
            </div>
            <input
              // disabled={isLoading}
              className="bg-violet-600 text-white mt-10 w-full py-2 text-lg poppins font-semibold cursor-pointer uppercase"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    );
  }

  return content;
}
