import Logo from "@/Components/Layout/Header/Logo"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { footerLinks, footerLinks2 } from "@/app/api/data"




const Footer = () => {
  return (
    <>
      <footer className="pt-10 relative bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="flex flex-col items-center lg:flex-row justify-between lg:items-center border-b pb-10 mb-10 gap-6">
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              <div className="flex items-start text-[15px]">
                <Icon 
                  icon="weui:location-outlined"
                  className="size-6 mr-3 mt-1"
                />

                <div className="flex flex-col">
                  <span>FD-3. Procube Complex</span>
                  <span>Vadodara, Gujarat</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[15px]">
                <Icon
                  icon="majesticons:phone-retro-line"
                  className="size-6"
                />

                <Link href="#" className="text-[15px] hover-text-prim">
                  +34 789 098 7654
                </Link>
              </div>

              <div className="flex items-center gap-2 text-[15px]">
                <Icon
                  icon="clarity:email-line"
                  className="size-6"
                />

                <Link href="#" className="text-[15px] hover-text-prim">
                  examplemail@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com"
                className="text-muted hover:text-dark transition-colors"  
              >
                <Icon 
                  icon="fe:facebook"
                  width="28"
                  height="28"
                />
              </Link>
              
              <Link 
                href="https://www.x.com"
                className="text-muted hover:text-dark transition-colors"  
              >
                <Icon 
                  icon="fa6-brands:square-twitter"
                  width="28"
                  height="28"
                />
              </Link>

              <Link 
                href="https://www.linkedin.com"
                className="text-muted hover:text-dark transition-colors"  
              >
                <Icon 
                  icon="fa6-brands:linkedin"
                  width="28"
                  height="28"
                />
              </Link>

              <Link 
                href="https://www.youtube.com"
                className="text-muted hover:text-dark transition-colors"  
              >
                <Icon 
                  icon="cbi:youtube-alt"
                  width="30"
                  height="30"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
              <div className="text-black pb-5">
                <Logo />

                <p className="text-[14px] font-poppins leading-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit minima sapiente tempora neque tempore, laudantium unde modi aliquid et, 
                </p>

                <div className="flex flex-wrap gap-3 items-center pt-5">
                  <Image 
                    src="/images/footer/award-logo-1.webp"
                    alt="award-logo-1"
                    width={70}
                    height={70}
                    className="p-2 cursor-pointer bg-black"
                  />

                  <Image 
                    src="/images/footer/award-logo-2.webp"
                    alt="award-logo-2"
                    width={70}
                    height={70}
                    className="p-2 cursor-pointer bg-black"
                  />
                </div>
              </div>

            </div>
            {footerLinks.map((column) => (
              <div key={column.title} className="md:col-span-1 lg:col-span-2">
                <h4 className="text-[18px] text-black mb-2 font-chakrapetch font-bold">
                  {column.title}
                </h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.title} className="pb-2">
                      <Link href={link.href} className="font-poppins text-[15px] hover:text-prim transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            ))}

            <div className="sm:col-span-2 md:col-span-3 lg:col-span-5">
              <p className="text-[18px] text-black font-bold font-chakrapetch">
                Sign up for updates
              </p>

              <form className="mt-5">
                <div className="relative">
                  <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-white placeholder:font-poppins text-black py-3 pl-5 pr-10 border border-border rounded-md"
                  />

                  <Icon
                    icon="solar:plain-2-linear"
                    className="text-[20px] font-poppins absolute right-4 top-3.5"
                  />
                </div>
              </form>

              <p className="text-[18px] text-black font-bold font-chakrapetch pt-10 pb-4">
                Get App
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#">
                  <Image 
                    src="/images/footer/google.webp"
                    alt="Google Play"
                    width={140}
                    height={45}
                    className="w-auto h-auto"
                  />
                </a>

                <a href="#">
                  <Image 
                    src="/images/footer/app.webp"
                    alt="App Store"
                    width={140}
                    height={45}
                    className="w-auto h-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-left">
            <p className="text-[15px] font-poppins mb-3 sm:mb-0">
              &copy; 2025 Axora Corporation. All rights reserved by {" "}
              <Link href="#" className="hover:text-prim hover:underline">
                Axora Corporation
              </Link>
            </p>

            <div className="flex gap-4">
              {footerLinks2.map((item, index) => (
                <Link key={index} href={item.link} className="text-[15px] hover:text-prim transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer