"use client";
import { useState } from "react";
import FilterTags from "@/components/FilterTags";
import ElegantResourceCard from "@/components/ResourceCard";
import Link from "next/link";
import { resources } from "@/lib/resourceData";

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const filteredResources = resources.filter(
    (resource) => selectedTag === "All" || resource.tags.includes(selectedTag)
  );

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white">
      <div className="absolute top-0 left-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl mt-32 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10">
            Unified Craft for Code <br />
            <span className="inline-flex bg-gradient-to-br from-white via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
              and Design
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Seamlessly integrate development and design workflows in one
            <br className="hidden sm:block" /> powerful, intuitive platform.
          </p>
        </div>

        <div className="mb-6 sm:mb-8 md:mb-10">
          <FilterTags onTagChange={handleTagChange} />
        </div>
        <div className=" flex justify-center  items-center flex-wrap">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredResources.map((resource) => (
              <ElegantResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
