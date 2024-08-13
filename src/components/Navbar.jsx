// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 shadow-lg bg-neutral-950 bg-opacity-80 z-50 text-white">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Logo.svg" 
            width={24} 
            height={24} 
            alt="Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8" 
          />
          <span className="text-lg sm:text-xl font-semibold ml-2">Rosenau</span>
        </Link>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <Link 
          href="/about" 
          className="text-sm sm:text-base hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link href={'/addresource'}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-600 transition-colors"
        >
          Add Resource
        </Link>
      </div>
    </nav>
  );
}
