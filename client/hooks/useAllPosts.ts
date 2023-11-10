import { useState, useEffect } from "react";

const useAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/api/posts");
        const allPosts = await response.json();

        setLoading(false);
        setPosts(allPosts.posts);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log("Error: ", e);
        }

        if (typeof e === "string") {
          console.log("Internal Server Error");
        }
      }
    };

    handleFetch();
  }, []);

  return { posts, loading };
};

export default useAllPosts;
