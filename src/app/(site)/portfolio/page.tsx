"use client"


import HeroSub from "@/Components/SharedComponents/HeroSub"
import Image from "next/image"
import Link from "next/link"
import { Portfolio } from "@/app/api/data"



const page = () => {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];


  // Agrupamos el portfolio en pares de 2 elementos.
  // reduce recorre todos los elementos de Portfolio.
  // Cuando el índice es par (0,2,4…) se hace un slice tomando 2 elementos
  // y se añade al acumulador. [1,2,3,4,5] → [[1,2], [3,4], [5]]
  const grouped = Portfolio.reduce<typeof Portfolio[]>((acc, _, i) => {
    if (i % 2 === 0) {
      acc.push(Portfolio.slice(i, i + 2)); // Crea un grupo con 2 elementos
    }
    return acc;
  }, []);


  // Render principal del componente
  return (
    <>
      {/* Hero superior con título, descripción y breadcrumbs */}
      <HeroSub
        title="Our Portfolio"
        description="Explore our portfolio of projects and experiences."
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Contenedor principal de la sección */}
      <div className="bg-light py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-6">

          {/* Recorremos los pares agrupados */}
          {grouped.map((pair, rowIndex) => (

            // Cada fila contiene 2 items del portfolio
            <div
              key={rowIndex}
              className="portfolio-wrapper w-full flex flex-col lg:flex-row gap-5"
            >

              {/* Renderizamos cada proyecto dentro del par */}
              {pair.map((item, i) => {

                // Determinamos cuál imagen debe ser grande
                // Alterna según el índice de la fila y la posición del elemento
                const isLarge =
                  (rowIndex % 2 === 0 && i === 0) ||  // En filas pares, la primera es grande
                  (rowIndex % 2 !== 0 && i === 1)     // En filas impares, la segunda es grande


                return (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.slug}`} // Enlace a la página del proyecto
                    className={`
                      relative rounded-2xl overflow-hidden group cursor-pointer
                      ${isLarge ? "w-full lg:w-[70%]" : "w-full lg:w-[30%]"} 
                    `}
                  >
                    {/* Imagen del proyecto */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={isLarge ? 800 : 600} // Resolución mayor para la imagen grande
                      height={isLarge ? 500 : 400}
                      className="
                        w-full h-full object-cover 
                        transition-transform duration-500 group-hover:scale-105
                      "
                    />

                    {/* Capa oscura encima de la imagen */}
                    <div
                      className="
                        absolute inset-0 bg-black/40 
                        group-hover:bg-black/60 transition-all duration-300
                      "
                    />

                    {/* Texto sobre la imagen */}
                    <div
                      className={`
                        absolute text-white  
                        ${isLarge ? "bottom-8 left-8" : "bottom-4 left-4"} 
                      `}
                    >
                      {/* Categoría del proyecto */}
                      <span className="border border-border px-2 rounded-sm text-xs md:text-sm">
                        {item.category}
                      </span>

                      {/* Título del proyecto */}
                      <h3
                        className={`
                          font-unbounded font-medium mt-2 
                          ${isLarge ? "text-xl lg:text-3xl" : "text-base lg:text-lg"} 
                        `}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
