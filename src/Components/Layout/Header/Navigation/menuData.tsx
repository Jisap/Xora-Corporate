import { headerItem } from "@/types/menu";


export const HeaderData: headerItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Pages",
    href: "#",
    submenu: [
      { 
        label: "About Us",
        href: "/about"
      },
      {
        label: "Team",
        href: "/team"
      },
      {
        label: "Faq",
        href: "/faq"
      },
      {
        label: "Contact",
        href: "/contact"
      }
    ]
  },
  {
    label: "Services",
    href: "#",
    submenu: [
      {
        label: "Services List",
        href: "/services"
      },
      {
        label: "Services Details",
        href: "/Services"
      },
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      {
        label: "Portfolio",
        href: "/portfolio"
      },
      {
        label: "Portfolio Details",
        href: "/portfolio"
      },
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      {
        label: "Blog",
        href: "/blog"
      },
      {
        label: "Blog Details",
        href: "/blog"
      },
    ]
  },
  {
    label: "Contact",
    href: "/contact"
  }
]

