import { Modal } from "flowbite-react";
// import React from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import PostForm from "./PostForm";
import { useState } from 'react'

const UpdateModal = ({ open, handleClose, info }) => {
  console.log("INFO-----", info)
  // I SHOULD DO "INFO.DATA" in order to update state
  // because all the data , i want to update in "info.data"
  // otherwise, it doesn't let me type anythin in "POSTFORM" where i update existing data with state

  const [blog, setBlog] = useState(info.data);
  const { putBlog } = useBlogCalls();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("NAME----", name, value)
    setBlog(prevBlog => ({
        ...prevBlog,
        [name]: value
    }));
};
console.log("Blog", blog)
  const handleSubmit = e => {
    e.preventDefault();
    putBlog(blog, handleClose);
  };
  return (
    <Modal  show={open}   onClose={handleClose}>
      <Modal.Body>
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Update Blog
          </h3>
          <PostForm
            info={blog}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;
