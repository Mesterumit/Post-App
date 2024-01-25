import { Modal } from "flowbite-react";
import React from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import BlogForm from "./BlogForm";

const UpdateModal = ({ open, handleClose, info }) => {
  const [blog, setBlog] = React.useState(info);
  const { putBlog } = useBlogCalls();

  const handleChange = e => {
    const { name, value } = e.target;
    setBlog({ ...info, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    putBlog(blog, handleClose);
  };
  return (
    <Modal onMouseDown={handleClose} show={open} onClose={handleClose}>
      <Modal.Body>
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Update Blog
          </h3>
          <BlogForm
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
