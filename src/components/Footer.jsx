// components/Footer.js
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-5 flex flex-col items-center relative z-10">
      <Image 
        src="/Rosenau.svg" 
        width={300} 
        height={300} 
        alt="Rosenau Logo" 
        className="w-[80%] mb-3" 
      />
      <hr className="w-full bg-gray-600 my-4" />
      <div className="w-[80%] flex flex-col sm:flex-row justify-between items-center">
        <div className=" font-semibold">
          Made by <br /> <Link href="http://mugilans.in" className="text-blue-400 hover:underline">Mugilan</Link>
        </div>
        <div className="flex gap-5 mt-4 sm:mt-0">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/addresource" className="hover:underline">Add a Resource</Link>
          <Link href="https://github.com/mugilankani/rosenau.git" className="hover:underline">Contribute on GitHub</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
