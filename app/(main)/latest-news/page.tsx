"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { titleVariant } from "@/utils/motion";
import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import LatestNewsCard from "@/components/latest_news_card";
import { useState } from "react";
import MainPostCard from "@/components/main-post-card";

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

const LatestNews = () => {
  const title = "Latest News";

  const [posts, setPosts] = useState<Posts>({ posts: [] });
  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<TPosts[]>([]);
  const [loading, setLoading] = useState(true);

  let data: Posts;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/posts");
      const data: Posts = await res.json();
      setLoading(false);
      setPosts(data);
    };

    fetchData();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const handleFetch = async () => {
      const res = await fetch("/api/posts");
      data = await res.json();
      FilteredData();
    };

    handleFetch();

    const FilteredData = () => {
      setPosts({ posts: [] });
      const filteredData = data?.posts.filter((posts) =>
        posts.postTitle.toLowerCase().includes(query)
      );
      console.log(filteredData);
      setFilteredPosts(filteredData);
    };
  };

  const Search = async () => {
    const handleFetch = async () => {
      const res = await fetch("/api/posts");
      data = await res.json();
      FilteredData();
    };

    handleFetch();

    const FilteredData = () => {
      setPosts({ posts: [] });
      const filteredData = data?.posts.filter((posts) =>
        posts.postTitle.toLowerCase().includes(query)
      );
      console.log(filteredData);
      setFilteredPosts(filteredData);
    };
  };

  return (
    <main>
      <h2 className='text-[40px] font-[700] p-20 bg-[#050c1c] text-center text-white'>
        {title.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={titleVariant}
            initial='initial'
            whileInView='animate'
            custom={i}
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <section className='py-10 px-[200px] max-sm:px-8 text-black'>
        <MainPostCard />
        <form
          onSubmit={handleSearch}
          className='flex bg-zinc-300 justify-between pl-6 pr-3 py-3 rounded-[100px] '
        >
          <input
            placeholder='Search for something...'
            className='bg-transparent w-full focus:outline-none'
            maxLength={100}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            className='bg-white p-2 rounded-full focus:outline-none'
            onClick={Search}
          >
            <AiOutlineSearch size={24} color='#c8500b' />
          </motion.button>
        </form>
        {loading && (
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className='flex items-center justify-center text-white my-[100px]'
          >
            <AiOutlineLoading3Quarters size={64} color='#D4D4D8' />
          </motion.div>
        )}

        {posts && (
          <div className='grid grid-cols-4 gap-6 mt-12 max-sm:grid-cols-2'>
            {posts?.posts.map((items: TPosts, i) => {
              const handleColor = (): string => {
                if (items.postCategory === "female") {
                  return "red";
                } else if (items.postCategory === "Politics") {
                  return "blue";
                }

                return "green";
              };
              return (
                <LatestNewsCard
                  key={i}
                  title={items.postTitle}
                  image={items.postImage}
                  category={items.postCategory}
                  link={items.id}
                  bgColor={handleColor}
                />
              );
            })}
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className='grid grid-cols-4 gap-6 max-sm:grid-cols-2'>
            {filteredPosts?.map((items: TPosts, i) => {
              const handleColor = (): string => {
                if (items.postCategory === "female") {
                  return "red";
                } else if (items.postCategory === "Politics") {
                  return "blue";
                }

                return "green";
              };

              return (
                <LatestNewsCard
                  key={i}
                  title={items.postTitle}
                  image={items.postImage}
                  category={items.postCategory}
                  link={items.id}
                  bgColor={handleColor}
                />
              );
            })}
          </div>
        )}

        {posts?.posts.length < 1 &&
          filteredPosts.length < 1 &&
          loading === false && <h2>No Posts</h2>}
      </section>
    </main>
  );
};

export default LatestNews;
