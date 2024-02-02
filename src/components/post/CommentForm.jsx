import React, { useRef } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";

const CommentForm = ({ id, getDetailData }) => {
  const inputRef = useRef();
  const { postComments } = useBlogCalls();
  const handleSubmit = e => {
    e.preventDefault();
    const commentData = {
      postId: id,
      content: inputRef.current.value,
    };
    postComments(commentData, getDetailData);

    inputRef.current.value = "";
  };
  return (
    <div className="flex mx-auto items-center justify-center shadow-lg  mb-4 max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white dark:bg-slate-800 dark:text-slate-300 rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg dark:text-slate-300">
            Add a new comment
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              ref={inputRef}
              className="bg-gray-100 rounded border dark:bg-slate-800 border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none dark:focus:bg-slate-500 focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
              defaultValue={""}
            />
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-white dark:bg-slate-800 cursor-pointer dark:text-slate-300 text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Add Comment"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
