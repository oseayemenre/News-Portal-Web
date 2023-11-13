"use client";

import React from "react";
import usePost from "@/hooks/usePost";

type Tparams = {
  params: {
    id: string;
  };
};

type TPosts = {
  id: string;
  postCategory: string;
  postDetails: string;
  postImage: string;
  postTitle: string;
  readTime: number;
};

const DynamicRoute = ({ params }: Tparams) => {
  const { data, loading } = usePost(params.id);

  console.log(data?.post?.postCategory);

  return (
    <main className='h-screen'>
      <p>{data?.post?.postTitle}</p>
      <p>{data?.post?.postDetails}</p>
      <p>{data?.post?.postImage}</p>
      <p>{data?.post?.postCategory}</p>
      <p>{data?.post?.readTime}</p>
      <p></p>
    </main>
  );
};

export default DynamicRoute;
