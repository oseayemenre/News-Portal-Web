import { BiCategory } from "react-icons/bi";
import {
  MdOutlinePostAdd,
  MdOutlinePages,
  MdDashboard,
  MdBarChart,
  MdLayers,
} from "react-icons/md";
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
    showArrow: true,
    dropdown: [
      { title: "Add Category", link: "/profile/category/add" },
      { title: "Manage Category", link: "/profile/category" },
    ],
  },
  {
    title: "Sub Category",
    icon: BiCategory,
    showArrow: true,
    dropdown: [
      { title: "Add Sub Category", link: "/profile/sub_category/add" },
      { title: "Manage Sub Category", link: "/profile/sub_category" },
    ],
  },
  {
    title: "Posts (News)",
    icon: MdOutlinePostAdd,
    showArrow: true,
    dropdown: [
      { title: "Add Posts", link: "/profile/posts/add" },
      { title: "Manage Posts", link: "/profile/posts" },
      { title: "Trash Posts", link: "/profile/posts/delete" },
    ],
  },
  {
    title: "Pages",
    icon: MdOutlinePages,
    showArrow: true,
    dropdown: [
      { title: "About Us", link: "/profile/about" },
      { title: "Contact Us", link: "/profile/contact" },
    ],
  },
  {
    title: "Comments",
    icon: FaComments,
    showArrow: true,
    dropdown: [
      { title: "Waiting for Approval", link: "/profile/comments/approval" },
      { title: "Approved Comments", link: "/profile/comments" },
    ],
  },
];

export const dashboard_card = [
  {
    label: "CATEGORIES LISTED",
    count: 5,
    icon: MdBarChart,
    route: "/profile/category",
  },
  {
    label: "LISTED SUBCATEGORIES",
    count: 8,
    icon: MdLayers,
    route: "/profile/sub_category",
  },
  {
    label: "LIVE NEWS",
    count: 5,
    icon: MdLayers,
    route: "/profile/posts",
  },
  {
    label: "TRASH NEWS",
    count: 0,
    icon: MdLayers,
    route: "/profile/trash_posts",
  },
] as const;
