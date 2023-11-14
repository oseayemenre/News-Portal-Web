"use client";

import { useState, useEffect } from "react";

type Posts = {
  post: {
    id: string;
    postCategory: string;
    postDetails: string;
    postImage: string;
    postTitle: string;
    readTime: number;
  };
};

const usePost = (id: string) => {
  const [data, setData] = useState<Posts>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/posts/${id}`);
        const post = await response.json();
        setData(post);
        setLoading(false);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log("Error: ", e.message);
        }

        if (typeof e === "string") {
          console.log("Internal server error");
        }
      }
    };

    handleFetch();
  }, []);
  return { data, loading };
};

export default usePost;
