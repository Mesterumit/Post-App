

import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";
import CommentForm from "../components/post/CommentForm";
import CommentCard from "../components/post/CommentCard";
import { Button } from "flowbite-react";
import UpdateModal from "../components/post/UpdateModal";
import DeleteModal from "../components/post/DeleteModal";
import Loading from "../components/Loading";

const Detail = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [showComment, setShowComment] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const { axiosWithToken } = useAxios();
    const { currentUser } = useSelector(state => state.auth);


    const [detail, setDetail] = useState({});
    const [isPublished, setIsPublished] = useState(detail?.data?.status)
    console.log("DETAIL SATTUS------", detail?.data?.status)



    const getDetailData = async () => {

        console.log("id", id)
        try {
            console.log("Request Headers:", axiosWithToken.defaults.headers);
            const { data } = await axiosWithToken.get(`api/posts/${id}`);
            console.log("-----DATA----", data)
            setDetail(data)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(true);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        getDetailData();
    };
    const handleOpenDelete = () => {
        setOpenDelete(true);
    };
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };


    const handleTogglePublished = () => {

        if (detail?.data?.status === 'published') {
            updateStatus('unpublished');
            setIsPublished(detail?.data?.status);
        } else {
            setIsPublished(detail?.data?.status);
            updateStatus('published');
        }
    };

    const updateStatus = async (newStatus) => {
        try {
            await axiosWithToken.put(`api/posts/${id}`, { status: newStatus });
            getDetailData();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };


    useEffect(() => {
        getDetailData();
    }, []);

    useEffect(() => {
        setIsPublished(detail?.data?.status || '');
    }, [detail]);

    const handleClick = async () => {
        try {
            // Checking if detail.likes is defined and has at least one element in state
            const isLiked = detail.likes && detail.likes.length > 0;

            console.log("post id:", detail.data._id);

            if (isLiked) {
                // Using the first element's _id if it is exist in db and store
                const likeId = detail.likes[0]._id || null;


                if (likeId) {
                    console.log("Deleting like");
                    await axiosWithToken.delete(`api/like/${likeId}`);
                }
            } else {
                await axiosWithToken.post(`api/like`, { userId: id, postId: detail.data._id });
            }

            getDetailData();
        } catch (error) {
            console.error(error.response?.data?.error || error.message);
        }
    };


    return (
        <>
            {!loading ? (
                <article className=" my-auto  max-w-2xl px-auto py-12 mx-auto space-y-8 h-screen h-100 dark:bg-gray-800 dark:text-gray-50 ">
                    <div className="w-full bg-white grid place-items-center detail">
                        <img src={detail?.data?.image} alt={detail?.data?.title} className="rounded-xl" />
                    </div>
                    <div className="w-full mx-auto  space-y-4 text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                            {detail.data.title}
                        </h1>
                        <p className="text-sm dark:text-gray-400">
                            by
                            <span className="p-1">
                                {detail.data.author.first_name}
                            </span>
                            on
                            <time className="p-1">
                                {new Date(detail.data.createdAt).toLocaleString().split(',', 1)}
                            </time>
                        </p>
                    </div>
                    <div className="dark:text-gray-100 text-justify indent-5">
                        <p>{detail.data.content}</p>
                    </div>


                    <div className="pt-12 border-t dark:border-gray-700">
                        <div className="flex justify-center pt-4 space-x-4 align-center">
                            <div className="flex">
                                <svg
                                    className="h-8 w-8 text-yellow-500"
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

                                <span className="text-gray-500 text-lg pl-1">
                                    {detail.views}
                                </span>
                            </div>
                            <div
                                className="flex cursor-pointer"
                                onClick={() => handleClick()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        detail.likes?.length > 0
                                            ? "h-8 w-8 text-pink-500"
                                            : "h-8 w-8 text-gray-500"
                                    }
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="pl-1 text-lg text-gray-500">
                                    {detail.likes.length}
                                </span>
                            </div>
                            <div
                                className="flex cursor-pointer"
                                onClick={() => setShowComment(!showComment)}>
                                <svg
                                    className="h-8 w-8 text-gray-500"
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
                                <span className="text-lg pl-1 text-gray-500">
                                    {detail.comments.length}
                                </span>

                            </div>
                            <div className="border-gray-600">
                                <label id='checkedBox' className={isPublished == 'published' ? 'text-green-600' : 'text-red-600'}>
                                    {detail?.data?.status}
                                </label>
                                <input
                                    className={`${isPublished  == 'published' ? 'text-green-600 focus:ring-green-500' : 'text-red-600 focus:ring-red-500'} w-4 h-4 mx-4 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                                    type="checkbox"
                                    name={isPublished == 'published' ? 'published' : 'unpublished'}
                                    htmlFor='checkedBox'
                                    onClick={handleTogglePublished}
                                />
                            </div>
                        </div>
                    </div>

                    {currentUser?.first_name == detail?.data.author.first_name && (
                        <div className="flex justify-center pt-4 space-x-4 align-center ">
                            <Button
                                onClick={handleOpen}
                                outline={true}
                                gradientDuoTone="purpleToPink">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                            </Button>
                            <Button
                                onClick={handleOpenDelete}
                                outline={true}
                                gradientDuoTone="pinkToOrange">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </Button>
                            <UpdateModal
                                open={open}
                                handleClose={handleClose}
                                info={detail}
                            />
                            <DeleteModal
                                open={openDelete}
                                handleCloseDelete={handleCloseDelete}
                                id={detail.data._id}
                            />
                        </div>
                    )}
                    {showComment && (
                        <div>
                            <CommentForm id={detail.data._id} getDetailData={getDetailData} />
                            {detail.comments?.map((comment, index) => (
                                <CommentCard key={index} comment={comment} />
                            ))}
                        </div>
                    )}
                </article>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Detail;
