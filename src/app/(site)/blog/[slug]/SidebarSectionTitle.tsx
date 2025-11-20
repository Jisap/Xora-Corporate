type SidebarSectionTitleProps = {
  title: string;
};

export const SidebarSectionTitle = ({ title }: SidebarSectionTitleProps) => (
  <h4 className="text-black pb-5">
    {title}
  </h4>
);