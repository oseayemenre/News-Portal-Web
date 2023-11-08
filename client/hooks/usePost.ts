"use client";

import { useState, useEffect } from "react";

const usePost = (id: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/api/posts/${id}`);
        const post = await response.json();
        setData(post);
        setLoading(false);
      } catch (e) {
        setError(true);
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
  return { data, error, loading };
};

export default usePost;
