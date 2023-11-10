"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariant } from "@/utils/motion";
import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import useAllPosts from "@/hooks/useAllPosts";
import LatestNewsCard from "@/components/latest_news_card";
import { useState } from "react";

type TPosts = {
  id: string;
  postCategory: string;
  postDetails: string;
  postImage: string;
  postTitle: string;
  readTime: string;
};

const LatestNews = () => {
  const title = "Latest News";

  const { posts: data, loading } = useAllPosts();
  const [query, setQuery] = useState("");

  const [filteredPosts, setFilteredPosts] = useState<TPosts[]>(data);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.length > 0) {
      setFilteredPosts(
        data?.filter((items: TPosts) => items.postTitle.includes(query))
      );
    } else {
      setFilteredPosts(data);
    }
  };

  console.log(filteredPosts);
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

      <section className='py-[80px] px-[200px] max-sm:px-8 text-black'>
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

        {filteredPosts.length > 1 ? (
          <div className='grid grid-cols-2 gap-6'>
            {filteredPosts?.map((items: TPosts, i) => (
              <LatestNewsCard key={i} title={items.postTitle} />
            ))}
          </div>
        ) : (
          <h2>No Posts Found</h2>
        )}
      </section>
    </main>
  );
};

export default LatestNews;
