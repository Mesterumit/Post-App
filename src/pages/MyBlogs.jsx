import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import Card from "../components/post/Card";
import Loading from "../components/Loading";


const MyBlogs = () => {
  const { getUserBlogs } = useBlogCalls();
  const { MyPosts, loading } = useSelector(state => state.post);
  console.log("MyPOST", MyPosts)

  useEffect(() => {
    getUserBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex w-full dark:bg-slate-800 flex-wrap justify-center items-center p-5">
        {MyPosts?.userPosts.length > 0 &&
          MyPosts?.userPosts.map(item => <Card
            key={item._id}
            post={item}
          />)}
      </div>
    </>
  );
};

export default MyBlogs;
