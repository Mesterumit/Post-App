import useAxios from "./useAxios";
import { fetchFail, fetchStart,  getSuccess,createSuccess } from "../features/likeSlice";
import {useDispatch,useSelector} from 'react-redux'

const useLikesCalls = () => {
  const { axiosWithToken, axiosWithoutToken } = useAxios();

  const dispatch = useDispatch()

  const user = useSelector(state => state.auth.currentUser);
    const  createLike = async (postId) => {
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken.post(`api/like`,
          {postId},
          {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
        
        });
          dispatch(createSuccess({ payload: data }));
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
  return {
    createLike
  };
};

export default useLikesCalls;
