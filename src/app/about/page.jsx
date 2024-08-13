import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="mt-32 flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row  justify-center gap-20 max-w-[1300px] px-4">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold mt-8">About</h1>
          <h1 className="text-6xl font-bold text-[#878787]">Rosenau</h1>
        </div>
        <div className="text-left w-full md:w-[50%] text-xl p-6 text-white bg-opacity-80 rounded-lg shadow-md">
          <p className="text-3xl text-[#dadada]">
            Rosenau was created to ease the frustrations of frontend development and web design. I struggled with finding reliable resources and tools, which wasted valuable time.
          </p>
          <p className="mt-4 text-3xl text-[#dadada]">
            Our mission is to provide a curated selection of essential resources and tools, handpicked by me and other experts. Rosenau aims to streamline your development process so you can focus on enhancing your skills and building great projects.
          </p>
          <hr className="mt-5" />
          <div className="mt-5 flex flex-col md:flex-row justify-between w-full">
            <Link href="https://mugilans.in" className="underline">
              Portfolio
            </Link>
            <Link href="https://github.com/mugilankani" className="underline">
              Git Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
