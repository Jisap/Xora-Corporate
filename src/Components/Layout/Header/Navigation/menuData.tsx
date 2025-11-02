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
  }
]

