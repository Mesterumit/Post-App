import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";
import { axiosPublic } from "./useAxios";
import { useNavigate } from "react-router-dom";
import {toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/api/auth/login", userInfo);
      console.log("Login Payload:", data);
        dispatch(loginSuccess(data));
        navigate("/");
        toastSuccessNotify("Login performed");
       
    } catch (err) {
      console.error("Login Error:", err);
      console.error("Login Error:", err.response);
      dispatch(fetchFail());
    }
  };

  
  
  

  const logout = async () => {
    dispatch(fetchStart());
    console.log("logging out..")
    try {
      await axiosPublic.post("/api/auth/logout");
      dispatch(logoutSuccess());
      navigate("/");
      toastSuccessNotify("Logout performed");
    
    } catch (err) {
        console.log(err)
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
  
  try{
      const { data } = await axiosPublic.post("/api/auth/register", userInfo);
      console.log("Data:", data);
  
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };
  

  return {
    login,
    logout,
    register,
  };
};

export default useAuthCalls;
