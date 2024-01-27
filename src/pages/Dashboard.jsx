import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Button}  from 'flowbite-react'
import useBlogCalls from '../hooks/useBlogCalls'
// import useLikesCalls from "../hooks/useLikeCalls";
import Card from '../components/post/Card'
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
// import loading 





const Dashboard =()=>{
    // get Blogs from db
    const {getBlogs} = useBlogCalls()
// get blogs and loading state from the store
    const {posts, loading} = useSelector(state => state.post)


console.log("POSTS:", posts)


// set some state for blogs
const [data, setData] = useState();
console.log("DATa :" ,data)

// set some state for likes
// const [like, setLike] = useState([]);


// useEffect to get blogs from db on page load

 useEffect(()=>{
    getBlogs() 
    // createLike()
 },[])

//another  useEffect to set our data to blogs from the store , i am gonna set the state to hold in store for blogs and data will be an array
useEffect(()=>{
     console.log("posts :" ,posts)
   if(posts !== null){
    if(posts.data !== null){
        setData(posts.data.slice(0,2))
    }
}
 },[posts])
 
 const handleClick = index => {
    data?.data?.length < 3 ? setSliceData(news) : setSliceData(data.data.slice(0, 3));
  };


  if (loading) {
    return <Loading />;
  }
// configure the button that loads extra posts

// make the news card
    return(
        <div className="dark:bg-slate-800 w-full flex p-5 justify-center gap-5">
        <div className="p-6 mt-20 flex flex-col w-8/12 max-[600px]:w-full 2xl:w-6/12">
        {data?.map(post => (
            <Card key={post._id} post={post} />
))}


{posts?.data.length > 3 && (
          <div className="flex w-11/12">
            {/* flowbite */}
            <Button
              onClick={()=>{handleClick}}
              className="mx-auto m-3 mb-12 sm:mb-auto"
              gradientDuoTone="cyanToBlue">
              {data?.length == 3 ? "Read More" : "Close More"}
            </Button>
          </div>
        )}
        </div>
        {/* render news card component */}
        <div className="w-3/12 2xl:w-5/12 max-[600px]:hidden">
         <NewsCard />
      </div>
    </div>
    )
}

export default Dashboard