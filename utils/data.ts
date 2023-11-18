import { BiCategory } from "react-icons/bi";
import { MdOutlinePostAdd, MdOutlinePages, MdDashboard } from "react-icons/md";
import { FaComments } from "react-icons/fa6";

export const navitems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Latest News",
    link: "/latest-news",
  },
  {
    label: "Contact",
    link: "/contact",
  },
] as const;

export const buttonitems = {
  value: "Login",
  bgcolor: "#c8500b",
  push: "/login",
  textColor: "white",
};

export const footer_about = [
  "Popular",
  "Trending",
  "Contact",
  "Support/Help",
  "Request Topics",
] as const;

export const footer_column2 = [
  "FAQs",
  "Terms and Condition",
  "Support",
  "Link Nine",
  "Link Ten",
] as const;

export const footer_social = [
  {
    name: "Facebook",
    image: "/Facebook.png",
  },
  {
    name: "Instagram",
    image: "/Instagram.png",
  },
  {
    name: "Twitter",
    image: "/Twitter.png",
  },
  {
    name: "LinkedIn",
    image: "/LinkedIn.png",
  },
] as const;

export const footer_bottom = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
] as const;

export const colors = ["blue", "red", "purple", "green", "orange"] as const;

export const dashboard_items = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    path: "/profile",
  },
  {
    title: "Category",
    icon: BiCategory,
    path: "/profile/category",
  },
  {
    title: "Sub Category",
    icon: BiCategory,
    path: "/profile/sub_category",
  },
  {
    title: "Posts (News)",
    icon: MdOutlinePostAdd,
    path: "/profile/posts",
  },
  {
    title: "Pages",
    icon: MdOutlinePages,
    path: "/profile/pages",
  },
  {
    title: "Comments",
    icon: FaComments,
    path: "/profile/comments",
  },
] as const;
