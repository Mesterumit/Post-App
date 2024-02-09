import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'flowbite-react'
import useBlogCalls from '../hooks/useBlogCalls'
import Card from '../components/post/Card'
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";






const Dashboard = () => {
    const { getBlogs } = useBlogCalls()
    const { posts, loading } = useSelector(state => state.post)
  
    const [data, setData] = useState();
    

    useEffect(() => {
        getBlogs()
    },[])
  
   

    //another  useEffect to set our data to posts from the store , i am gonna set the state to hold in store for posts and data will be an array
    useEffect(() => {
        if (posts !== null) {
            if (posts.data !== null) {
                setData(posts.data.slice(0, 3))
            }
        }
    },[posts])

    const handleClick = index => {
        console.log("HandleClick :", data.length)
        data?.length > 3  ? setData(posts.data.slice(0,3)) : setData(posts.data.slice(0, 4));
    };


    if (loading) {
        return <Loading />;
    }
    // configure the button that loads extra posts
    // make the news card
    return (
        <div className="dark:bg-slate-800 h-100 w-full flex  justify-center gap-5 dark:text-white">
            <div style={{marginTop:'45px'}} className="p-6 mt-20 flex flex-col w-8/12 max-[600px]:w-full 2xl:w-6/12">
                {data?.map(post => (
                    <Card  key={post._id} post={post} />
                ))}


                {posts?.data.length > 3 && (
                    <div className="flex w-11/12 z-10 ">
                        <Button
                            onClick={handleClick}
                            className="mx-auto m-3 mb-12 sm:mb-auto"
                            gradientDuoTone="cyanToBlue">
                            {data?.length == 3 ? "Read More" : "Close More"}
                        </Button>
                    </div>
                )}
            </div>
            {/* render news card component */}
            <div style={{marginTop:'70px'}} className="w-3/12 2xl:w-5/12 max-[600px]:hidden">
                <NewsCard />
            </div>
        </div>
    )
}

export default Dashboard