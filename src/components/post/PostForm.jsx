import React from "react";
import { useSelector } from "react-redux";

const PostForm = ({ info,handleChange,  handleSubmit }) => {
  const { categories } = useSelector(state => state.post);
  
  // const { data } = info;
  console.log("INFO.TITLE---",info.title)
  console.log("INFO---",info)
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="form">
        <div className="md:flex flex-row md:space-x-4 w-full text-xs">
          <div className="mb-3 space-y-2 w-full text-xs">
            <label className="font-semibold text-gray-600 py-2">
              Title <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="Title"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="title"
              id="title"
              value={info.title}
              onChange={handleChange}
            />
            <p className="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="mb-3 space-y-2 w-full text-xs">
          <label className=" font-semibold text-gray-600 py-2">
            Image Url <abbr title="required">*</abbr>
          </label>
          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            <div className="flex">
              <span className="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="text"
              className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
              placeholder="https://"
              name="image"
              id="image"
              value={info.image || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
          <div className="w-full flex flex-col mb-3">
            <label className="font-semibold text-gray-600 py-2">
              Category <abbr title="required">*</abbr>
            </label>
            <select
              className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
              required="required"
              name="category"
              id="category"
              value={info.category || ""}
              onChange={handleChange}>
              {categories?.data.map(item => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-red-500 hidden mt-3" id="error">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="font-semibold text-gray-600 py-2">
              Status <abbr title="required">*</abbr>
            </label>
            <select
              className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
              required="required"
              name="status"
              id="status"
              value={info.status || ""}
              onChange={handleChange}>
              <option value>Please choose...</option>
              <option value="unpublished">unpublished</option>
              <option value="published">Published</option>
            </select>
            <p className="text-sm text-red-500 hidden mt-3" id="error">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex-auto w-full mb-1 text-xs space-y-2">
          <label className="font-semibold text-gray-600 py-2">Content</label>
          <textarea
            required
            name="content"
            id="content"
            value={info.content || ""}
            onChange={handleChange}
            className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4"
            placeholder="The content write here..."
            spellCheck="false"
          />
          <p className="text-xs text-gray-400 text-left my-3">
            You inserted {info.content.length || 0} characters
          </p>
        </div>
        <p className="text-xs text-red-500 text-right my-3">
          Required fields are marked with an asterisk{" "}
          <abbr title="Required field">*</abbr>
        </p>
        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <button
            type="submit"
            className="mb-2 md:mb-0 bg-slate-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
