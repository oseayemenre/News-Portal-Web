"use client";

import { useState, useEffect } from "react";

const usePosts = () => {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch("http://localhost:4000/api/posts/");
      const data = await response.json();

      setData(data);
    };

    handleFetch();
  }, []);
  return { data, loading, error };
};

export default usePosts;
