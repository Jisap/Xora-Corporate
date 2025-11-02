import Link from "next/link"


const Logo: React.FC= () => {
  return (
    <Link 
      href="/"
      className="font-mona font-bold logo text-2xl md:text-3xl"
    >
      Axora
    </Link>
  )
}

export default Logo