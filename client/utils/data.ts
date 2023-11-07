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

export const buttonitems = [
  {
    value: "Login",
    bgcolor: "transparent",
    border: "#c8500b",
    push: "/login",
  },
  {
    value: "Subscribe",
    bgcolor: "#c8500b",
    textcolor: "white",
  },
] as const;

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
