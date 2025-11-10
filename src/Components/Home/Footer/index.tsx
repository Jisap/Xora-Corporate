import Logo from "@/Components/Layout/Header/Logo"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"




const Footer = () => {
  return (
    <>
      <footer className="pt-10 relative bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b pb-10 mb-10 gap-6">
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
        </div>
      </footer>
    </>
  )
}

export default Footer