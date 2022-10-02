interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

type Nav = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}[];

export const NAV_ITEMS: Nav = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/articles",
    label: "Articles",
  },
  {
    link: "/profile",
    label: "Profile",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];
