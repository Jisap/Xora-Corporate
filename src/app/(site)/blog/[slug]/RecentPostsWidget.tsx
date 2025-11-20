import Image from "next/image";
import Link from "next/link";
import { SidebarSectionTitle } from "./SidebarSectionTitle";

interface Post {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
}

interface RecentPostsWidgetProps {
  posts: Post[];
  basePath: string;
}

export const RecentPostsWidget = ({ posts, basePath }: RecentPostsWidgetProps) => {
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
      <SidebarSectionTitle title="Recent Posts" />
      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center gap-4 group">
            <Image src={post.image} alt={post.title} width={80} height={80} className="rounded-lg object-cover w-20 h-20 shrink-0" />
            <div>
              <p className="text-sm text-gray-500">{post.date}</p>
              <Link href={`/${basePath}/${post.slug}`}><h5 className="font-semibold text-black group-hover:text-prim transition-colors duration-300 line-clamp-2">{post.title}</h5></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};