import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Button}  from 'flowbite-react'
import useBlogCalls from '../hooks/useBlogCalls'
// import useLikesCalls from "../hooks/useLikeCalls";
import Card from '../components/post/Card'

// import news card
// import loading 





const Dashboard =()=>{
    // get Blogs from db
    const {getBlogs} = useBlogCalls()
// get blogs and loading state from the store
const {posts, loading} = useSelector(state => state.post)

// get likes from db
// const {createLike} = useLikesCalls()
// getting likes and loading state from the store
// const {likes} = useSelector(state => state.like)
// console.log("likes :" , likes)

// set some state for blogs
const [data, setData] = useState([]);

// set some state for likes
// const [like, setLike] = useState([]);


// useEffect to get blogs from db on page load

 useEffect(()=>{
    getBlogs()
    // createLike()
 },[])

//another  useEffect to set our data to blogs from the store , i am gonna set the state to hold in store for blogs and data will be an array
useEffect(()=>{
    setData(posts)
    // setLike(likes)
    console.log("posts :" ,posts)
 },[posts])

 // If getLike is meant to update the local state of likes, you can do the following
// useEffect(() => {
//     createLike(); // Assuming getLike updates the local state of likes (like)
//   }, [likes]); // Add likes as a dependency
  
// configure the button that loads extra posts

// make the news card
    return(
        <div className="p-6 mt-20">
            <h1>Posts</h1>
            {posts?.data.map(
            post => (
                // render news card component
                <Card key={post._id} post={post} />

            )
            // <h1 key={post._id}>{post.title}</h1>
            
            )}
        </div>
    )
}

export default Dashboard