import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://blog-api-14oc.onrender.com";

//* Axios Instance for Public API Request.
// any requests where we don't need to send a token to authenticate the user OR don't need access to the whole custom hook.
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  // here, we are getting the token from the redux store.
  const { token } = useSelector((state) => state.auth);

  //* Axios Instance for Private API Request
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
  // similar to axiosPublic, just within the hook.
  const axiosWithoutToken = axios.create({
    baseURL: BASE_URL  });

  return { axiosWithToken,axiosWithoutToken };
};

export default useAxios;