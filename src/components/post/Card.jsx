import {Button} from 'flowbite-react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
// import createLike from "../../hooks/useLikeCalls";
import useLikesCalls from "../../hooks/useLikeCalls";

const Card =({post,like})=>{

  const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.auth)
    // const [likesCount, setLikesCount] = useState(0);
    const navigate = useNavigate()
    // console.log("Image Path:", post.image);
    console.log("Likes :", like)
    console.log("Post :", post)
  const { createLike } = useLikesCalls();

  
  const handleLike = async(postId) => {
    console.log("Post ID in handleLike:", postId);
    // Dispatch the action to add a like
    dispatch(createLike({ postId }));
  };

    return(
        // console.log("Card :",post.image)
        // <h1>{item.title}</h1>

        <div
      className="relative flex flex-col mt-2 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 m-2 md:max-w-3xl  border border-white bg-white dark:bg-gray-800 dark:text-white"
      style={{ minHeight: "300px" }}>
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 grid place-items-center">
        <img src={post.image} alt="tailwind logo" name='image' className="rounded-xl" />
      </div>
      <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 dark:text-white flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block">
            {post.category.name}
          </p>
          <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            like?.filter((like) => like.user_id === currentUser?._id).length > 0
              ? "h-5 w-5 text-pink-500 cursor-pointer"
              : "h-5 w-5 text-gray-500 cursor-pointer"
          }
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => handleLike(post._id)} 
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <span className="pl-1 text-lg text-gray-500">{like}</span>
      </div>
          <div className="flex">
            <svg
              className="h-5 w-5 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
      
          <div className="flex">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
        </div>
        <h3 className="font-black text-gray-800 dark:text-slate-400 md:text-3xl text-xl">
          {post.title}
        </h3>
        <p
          className="md:text-lg text-gray-500 text-base line-clamp-2"
          style={{ minHeight: "50px", maxHeight: "120px" }}>
          {post.content}
        </p>
        <p className="text-gray-800 dark:text-slate-400 capitalize">
          Author: {post?.author?.role}
        </p>
        <p className="text-gray-800 dark:text-slate-400 capitalize">
          Publish Date: {new Date(post.published_date).toLocaleDateString()}
        </p>
        <p className="text-xl font-black text-gray-800">
          <Button
            gradientMonochrome="teal"
            onClick={() => navigate(`/detail/${post._id}`)}>
            See Details
          </Button>
        </p>
      </div>
    </div>
    )
}

export default Card