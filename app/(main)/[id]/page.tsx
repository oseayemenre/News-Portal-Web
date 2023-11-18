"use client";
import React from "react";
import usePost from "@/hooks/usePost";

type Tparams = {
  params: {
    id: string;
  };
};

const DynamicRoute = ({ params }: Tparams) => {
  const { data, loading } = usePost(params.id);

  console.log(data);

  return (
    <main className='h-screen'>
      <p>{data?.posts?.postTitle}</p>
      <p>{data?.posts?.postDetails}</p>
      <p>{data?.posts?.postImage}</p>
      <p>{data?.posts?.postCategory}</p>
      <p>{data?.posts?.readTime}</p>
      <p></p>
    </main>
  );
};

export default DynamicRoute;
