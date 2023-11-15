"use client";

import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/posts/home");
        const data = await response.json();

        setPosts(data?.posts);

        setLoading(false);
      } catch (e: unknown) {
        setLoading(false);
        if (typeof e === "string") {
          console.log("Internal server error");
        }

        if (e instanceof Error) {
          console.log("Error:", e.message);
        }
      }
    };

    handleFetch();
  }, []);
  return { posts, loading };
};

export default usePosts;
