import React, { memo, useState } from "react";
import newsImg from "../assets/news.jpg";
import { useEffect } from "react";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../features/newsSlice";
import Loading from "./Loading";

const NewsCard = () => {
  const [sliceData, setSliceData] = useState([]);

  console.log("render");

  const dispatch = useDispatch();
  const { news, loading } = useSelector(state => state.news);

  console.log("NEWS", news)
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    setSliceData(news.slice(0, 5));
  }, [news]);

  const handleClick = index => {
    sliceData.length < 6 ? setSliceData(news) : setSliceData(news.slice(0, 5));
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="mb-8 border-b-2 border-opacity-10 dark:border-violet-400">
        <span className="text-xs font-bold uppercase border-b-2 dark:border-violet-400">
          News
        </span>
      </div>
      <div className="flex flex-col divide-y divide-gray-700 w-full">
        {sliceData?.length > 1 ? (
          sliceData?.map((item, index) => {
            return (
              <div key={index} className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src={item?.image_url ? item?.image_url : newsImg}
                />
                <div className="flex flex-col flex-grow">
                  <p className="line-clamp-2 2xl:line-clamp-none">
                    {item?.title}
                  </p>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    {new Date(item?.pubDate).toDateString()}

                    <a
                      rel="noopener noreferrer"
                      target="true"
                      href={item?.link}
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">
                      See Details
                    </a>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex px-1 py-4">
            <div className="flex flex-col flex-grow">
              No news data available.
            </div>
          </div>
        )}
        <div className="flex w-11/12 ">
          <Button
            onClick={handleClick}
            className="mx-auto m-3"
            gradientDuoTone="cyanToBlue">
            {sliceData?.length < 6 ? "See More" : "Close More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(NewsCard);
