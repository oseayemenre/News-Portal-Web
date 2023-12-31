"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type TPosts = {
  id: string;
  postCategory: string;
  postDetails: string;
  postImage: string;
  postTitle: string;
  readTime: string;
  bgColor: string;
};

type Posts = {
  posts: TPosts[];
};

const MainPostCard = () => {
  const [post, setPost] = useState<TPosts[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("/api/posts");
      const data: Posts = await res.json();
      setPost(data.posts);
    };

    handleFetch();
  }, []);

  const handleColor = (): string => {
    if (post[0] && post[0].postCategory) {
      return "red";
    } else if (post[0]?.postCategory === "Politics") {
      return "blue";
    }

    return "green";
  };

  const firstPostTitle = post.length > 0 ? post[0]?.postTitle : "";
  const removespace = firstPostTitle ? firstPostTitle.replace(/^\s+/, "") : "";
  const Title =
    removespace && removespace.length > 0
      ? removespace.charAt(0).toUpperCase() + removespace.slice(1)
      : "";
  const firstCategory = post.length > 0 ? post[0].postCategory : "";
  const category = firstCategory ? firstCategory.replace(/^\s+/, "") : "";
  const Category = category
    ? category.split("")[0].toUpperCase() + category.slice(1)
    : "";

  return (
    <div>
      <Link href={post[0] && post[0].id ? post[0].id : ""}>
        <div className='bg-[url("/card-image.png")] bg-no-repeat bg-cover h-[300px] p-3 relative rounded-md cursor-pointer mb-20'>
          <div className='flex flex-start'>
            <div className={`bg-${handleColor()}-700 py-1 px-3 rounded-md`}>
              <p className='text-white font-bold text-[16px] text-center'>
                {Category}
              </p>
            </div>
          </div>

          {Title.length > 50 ? (
            <p className='absolute top-[140px] text-white text-[48px] font-bold max-sm:top-[120px]'>{`${Title.slice(
              0,
              50
            )}...`}</p>
          ) : (
            <p className='absolute top-[180px] text-white text-[48px] max-sm:top-[140px] font-bold'>
              {Title}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MainPostCard;
