
export type SibmenuItem = {
  label: string;
  href: string;
}


export type headerItem = {
  label: string;
  href: string;
  submenu?: SibmenuItem[]
}