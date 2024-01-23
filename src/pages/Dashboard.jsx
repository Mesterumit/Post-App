import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Button}  from 'flowbite-react'
import useBlogCalls from '../hooks/useBlogCalls'

// import news card
// import loading 





const Dashboard =()=>{
    // get Blogs from db
    const {getBlogs} = useBlogCalls()
// get blogs and loading state from the store
const {posts, loading} = useSelector(state => state.post)

// set some state for blogs
const [data, setData] = useState([]);


// useEffect to get blogs from db on page load

 useEffect(()=>{
    getBlogs()
 },[])

//another  useEffect to set our data to blogs from the store , i am gonna set the state to hold in store for blogs and data will be an array
useEffect(()=>{
    setData(posts)
    console.log("posts :" ,posts.data)
 },[posts])
// configure the button that loads extra posts

// make the news card
    return(
        <div className="p-6 mt-20">
            <h1>Posts</h1>
            {posts?.data.map(post => <h1 key={post._id}>{post.title}</h1>)}
        </div>
    )
}

export default Dashboard