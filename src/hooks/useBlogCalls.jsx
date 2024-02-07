import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useBlogCalls =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const {currentUser} = useSelector(state => state.auth)

    const {axiosWithToken,axiosWithoutToken} = useAxios()

    //!------------- GET CALLS ----------------
  const getBlogData = async url => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getBlogs = ()=>getBlogData("posts");
  const getCategories = () => getBlogData("categories");


  const getUserBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/users/${currentUser._id}/posts/`);
      console.log("MYBLOGS----", data)
      dispatch(getSuccess({ data, url: "MyPosts" }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }

  const postBlog = info => postBlogData(info, "posts/");

  //!------------- Post Comments ----------------
  //@URL Post/api/comments/
  
  const postComments = (info, getDetailData) =>
  postBlogData(info, `comments/`, getDetailData);

  //!------------- POST CALLS ----------------
  const postBlogData = async (info, url, callback) => {
    try {
      console.log("INFO-------", info)
      await axiosWithToken.post(`api/${url}`, info);
      toastSuccessNotify(`${url} successfuly added`);
      if (info.post) {
        callback();
      } else {
        getBlogData("posts");
      }
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

    //!------------- PUT CALLS ----------------
    const putBlog = async (info, handleClose, url = "posts") => {
      try {
        await axiosWithToken.put(`api/${url}/${info._id}/`, info);
        toastSuccessNotify(`${url} successfuly updated`);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    };
      //!------------- DELETE CALLS ----------------

  const deleteBlogs = async (id, url = "posts") => {
    try {
      await axiosWithToken.delete(`api/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getBlogData(url);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

    useEffect(() => {
    if (currentUser) {
      getCategories();
    }
  },[currentUser]);
  return{
    getBlogs,
    postComments,
    postBlog,
    getCategories,
    putBlog,
    deleteBlogs,
    getUserBlogs,
  }
}

export default useBlogCalls