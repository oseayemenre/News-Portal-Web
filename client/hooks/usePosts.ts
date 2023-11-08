"use client";

import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/api/posts/home");
        const data = await response.json();

        setPosts(data?.posts);

        setLoading(false);
      } catch (e: unknown) {
        setLoading(false);
        setError(true);
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
  return { posts, loading, error };
};

export default usePosts;
