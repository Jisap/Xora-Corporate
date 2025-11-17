"use client"

import { blogs } from "@/app/api/data"
import ActionButton from "@/Components/SharedComponents/ActionButton"
import HeroSub from "@/Components/SharedComponents/HeroSub"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"



const page = () => {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = blogs.reduce(
    (acc, blog) => {
      if (!acc[blog.category]) {
        acc[blog.category] = 0;
      }
      acc[blog.category]++;
      return acc;
    }, {} as Record<string, number>
  );

  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <HeroSub
        title="Blog"
        description="Explore our blog posts and insights on strategies and best practices."
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container flex flex-col lg:flex-row items-center mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 gap-5 ">
          <div className="lg:w-[60%] w-full">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item) => (
                <div key={item.id} className="blog-item border border-border w-full bg-white p-5 rounded-2xl group h-auto mb-5">
                  <div className="blog-image w-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={250}
                      height={250}
                      className="w-full h-[320px] group-hover:scale-110 transition duration-300 object-cover"
                    />

                    <span className="absolute right-5 bottom-5 max-w-sm text-white font-chakrapetch bg-white/10 font-semibold backdrop-blur-sm rounded-sm text-2xl text-center p-3">
                      {item.date}
                    </span>
                  </div>

                  <div className="blog-contentpx-2 py-2 space-y-5">
                    <p>
                      <span className="border border-border px-2 rounded-sm">
                        {item.category}
                      </span> By{" "}
                      {item.author}
                    </p>

                    <h4 className="font-unbounded font-medium pb-2">
                      {item.title}
                    </h4>

                    <p className="leading-6 text-pera-dark line-clamp-3">
                      {item.description}
                    </p>

                    <ActionButton 
                      href={`/blog/${item.slug}`}
                      text="Read More"
                      variant="dark"
                      icon="tabler:arrow-right"
                    />
                  </div>
                </div>
              ))
            ):(
              <div className="text-center text-gray-500 py-10">
                No blogs found matching "{searchTerm}"
              </div>
            )}
          </div>

          <div className="lg:w-[40%] w-full lg:self-start sticky top-0 right-0">
            <div className="lg:sticky top-20 space-y-5">
              <div className="shadow-lg border border-gray-100 bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Search Here</h4>
                <form 
                  className="search-box"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input 
                    type="text"
                    placeholder="Search Here"
                    className="p-3 border-border w-full rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>

              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Recent Posts</h4>

                <div className="flex flex-col gap-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center gap-4 group">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover w-20 h-20 shrink-0"
                      />

                      <div>
                        <p className="text-sm text-gray-500">{post.date}</p>

                        <Link href={`/blog/${post.slug}`}>
                          <h5 className="font-semibold text-black group-hover:text-prim transition-colors duration-300 line-clamp-2">{post.title}</h5>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">
                  Categories
                </h4>

                <ul className="flex flex-col gap-3">
                  <li 
                    className={`flex justify-between items-center cursor-pointer group ${!selectedCategory ? 'text-prim' : ''}`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <span className="group-hover:text-prim transition-colors duration-300">Todas las Categorías</span>
                    <span>({blogs.length})</span>
                  </li>
                  {Object.entries(categories).map(([category, count]) => (
                    <li 
                      key={category}
                      className={`flex justify-between items-center cursor-pointer group ${selectedCategory === category ? 'text-prim' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="group-hover:text-prim transition-colors duration-300">{category}</span>
                      <span>({count})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page