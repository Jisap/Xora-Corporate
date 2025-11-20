import { SearchWidget } from "./SearchWidget";
import { RecentPostsWidget } from "./RecentPostsWidget";
import { CategoriesWidget } from "./CategoriesWidget";
import { TagsWidget } from "./TagsWidget";

interface Item {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  category: string;
  tags?: string[];
}

interface SidebarProps<T extends Item> {
  items: T[];       // Array de blogs
  basePath: string; // Ruta base para los enlaces
  currentBlog?: T;  // Blog actual (opcional)
}

export const Sidebar = <T extends Item>({ items, basePath, currentBlog }: SidebarProps<T>) => {
  const widgetItems = currentBlog ? [currentBlog] : items;

  return (
    <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20">
      <div className="space-y-5">
        <SearchWidget />
        <RecentPostsWidget
          posts={items}
          basePath={basePath}
        />
        <CategoriesWidget
          items={widgetItems}
          title="Categories"
        />
        <TagsWidget
          items={widgetItems}
          title="Tags"
        />
      </div>
    </div>
  );
};