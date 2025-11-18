"use client"

import { blogs } from "@/app/api/data"
import HeroSub from "@/Components/SharedComponents/HeroSub"
import Image from "next/image"
import { notFound } from "next/navigation"

import { Icon } from "@iconify/react"
import { use } from "react"
import  blog1 from "../../../../../public/images/blogdetails/blog-1.webp"
import  blog2 from "../../../../../public/images/blogdetails/blog-2.webp"



type Props = {
  params: Promise<{ slug: string }>;
}


const BlogDetails = ({ params }: Props) => {

  const { slug } = use(params); 

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    console.error('No se encontró el blog para el slug:', slug);
    return notFound();
  }

  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
    { href: `/blog/${slug}`, text: blog.title },
  ];

  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Extraer la primera oración del contenido para la frase importante
  const importantPhrase = blog.content.split('. ')[0] + '.';



  return (
    <>
      <HeroSub
        title={blog.title}
        description={blog.description}
        breadcrumbLinks={breadcrumbLinks} 
      />

      <section className="pb-20">
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 gap-5 flex flex-col lg:flex-row">
          <div className="lg:w-[60%] w-full">
            <div className="bg-white p-5 rounded-2xl">
              <Image 
                src={blog.image}
                alt={blog.name}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <h4 className="font-unbounded font-medium uppercase text-3xl py-5">
                {blog.title}
              </h4>

              <div className="space-y-4 text-pera-dark text-16 leading-6">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}

                <div className="border border-border rounded-lg p-5 bg-dark/30">
                  <Icon 
                    icon="tabler:quote"
                    width="60"
                    height="60"
                    className="mb-3"
                  />

                  <h5 className="text-black font-semibold font-chakrapetch leading-8">
                    "{importantPhrase}"
                  </h5>

                  <span className="w-full text-end block font-semibold font-unbounded">
                    - {blog.author}
                  </span>
                </div>

                <div className="flex gap-3 flex-wrap md:flex-nowrap py-8">
                  <Image src={blog1} alt="blog-image" width={200} height={200} className="w-full rounded-lg h-full" />
                  <Image src={blog2} alt="blog-image" width={200} height={200} className="w-full rounded-lg h-full" />
                </div>

                {blog.features && blog.features.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {blog.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Icon
                          icon="material-symbols:check-rounded"
                          width="24"
                          height="24"
                          className="bg-prim text-white rounded-full p-0.5 shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails