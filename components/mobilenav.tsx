import React from "react";
import { motion } from "framer-motion";
import { navitems, buttonitems } from "@/utils/data";
import Button from "./button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Mobilenav = () => {
  const { data: session } = useSession();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
      }}
      className='absolute top-[70px] right-4 flex flex-col items-end gap-y-4 bg-black bg-opacity-70 text-white shadow-lg px-12 py-4 z-50'
    >
      {navitems.map((items, i) => (
        <Link key={i} href={items.link} className='cursor-pointer'>
          {items.label}
        </Link>
      ))}

      <React.Fragment>
        {session?.user ? (
          <div className='flex flex-col gap-y-3 items-end'>
            <p>Profile</p>
            <Button
              value='Sign Out'
              bgcolor={buttonitems.bgcolor}
              textcolor={buttonitems.textColor}
              submit={() => signOut()}
            />
          </div>
        ) : (
          <Button {...buttonitems} />
        )}
      </React.Fragment>
    </motion.div>
  );
};

export default Mobilenav;
