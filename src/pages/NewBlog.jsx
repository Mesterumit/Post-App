import React, { useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import PostForm from "../components/post/PostForm";
import { useSelector } from "react-redux";


const initialState = {
  title: "",
  image: "",
  category: 1,
  status: "",
  content: "",
}

const NewBlog = () => {
  const [info, setInfo] = useState(initialState)

  const { postBlog } = useBlogCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog(info);
    setInfo(initialState);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
      style={{
        height: '100vh',
        "backgroundImage":
          "url(https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0" />
      <div className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800 dark:text-black rounded-xl shadow-lg z-0">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">New Blog</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <PostForm info={info} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
