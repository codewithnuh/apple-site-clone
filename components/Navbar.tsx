'use client'
import Image from "next/image";
import { Container } from "./shared/Container";
import Link from "next/link";
import { useEffect,useState } from "react";

export const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    useEffect(()=>{
      const handleScroll = () => {
        // Add glassy effect when scrolled past 50px
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    },[])
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-black/50 backdrop-blur-md '
      : 'bg-transparent'
  }`}>
    <Container >
      <nav className="flex flex-between py-2">
        <div><Image src={'/logo.svg'} alt="apple logo" width={30} height={30} />
        </div>
        <ul role="list" className="hidden md:flex items-center space-x-2">
          {[{ title: 'mac', href: '/' }, { title: 'ipad', href: '/' },
          { title: 'iphone', href: '/' },
          { title: 'watch', href: '/' },
          { title: 'tv', href: '/' },
          { title: 'music', href: '/' },
          { title: 'support', href: '/' }].map((item, idx) => (
            <li role="listitem" className="hover:font-bold group relative transition-all pb-1 hover:cursor-pointer capitalize" key={idx}><Link href={item.href}>{item.title}
             <span className="absolute  bottom-0 left-0  h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-white"></span>
             </Link></li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Image src={'/search.svg'} alt="search icon" width={20} height={
            20} />
          <Image src={'/cart.svg'} alt="search icon" width={20} height={
            20} />
        </div>
      </nav>
    </Container>

  </header>;
};
