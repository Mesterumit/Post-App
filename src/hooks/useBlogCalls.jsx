import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/blogSlice";
import useAxios from "./useAxios";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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
      const { data } = await axiosWithoutToken.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getBlogs = async() =>await getBlogData("posts");
  const getCategories = () => getBlogData("categories");
  const getUserBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/posts?author=${currentUser._id}`);
      dispatch(getSuccess({ data, url: "myPosts" }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }
  return{
    getBlogs
  }
}

export default useBlogCalls