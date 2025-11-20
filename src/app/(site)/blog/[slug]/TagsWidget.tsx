import { SidebarSectionTitle } from "./SidebarSectionTitle";

interface Item {
  tags?: string[];
}

interface TagsWidgetProps<T extends Item> {
  items: T[];
  title: string;
}

export const TagsWidget = <T extends Item>({ items, title }: TagsWidgetProps<T>) => {
  const allTags = Array.from(
    items.reduce((acc, item) => {
      item.tags?.forEach(tag => acc.add(tag));
      return acc;
    }, new Set<string>())
  );

  return (
    <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
      <SidebarSectionTitle title={title} />
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <span key={tag} className="border border-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300 cursor-pointer">
            {tag}
          </span>))}
      </div>
    </div>
  );
};