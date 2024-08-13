import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Function to normalize the title for URL usage
const normalizeTitle = (title) => title.replace(/\s+/g, "-").toLowerCase();

const truncateDescription = (description, maxLength = 100) => {
  if (description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`;
  }
  return description;
};

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-black border border-white shadow-[4px_4px_6px_rgba(255,255,255,0.4)] rounded-3xl p-6 max-w-sm   transition-all duration-300">
      <div className="space-y-4 min-h-[50%]">
        <Link  href={`/resources/${normalizeTitle(resource.title)}`} className="flex items-center justify-center w-full min-h-[50%] overflow-hidden">
          <Image
            src={resource.image}
            alt={resource.title}
            height={200}
            width={200}
            className="rounded-2xl overflow-hidden h-56 object-contain"
          />
        </Link>

        <div>
          <h2 className="text-white text-xl font-bold">{resource.title}</h2>
          <p className="text-gray-400 text-sm mt-2">
            {truncateDescription(resource.description)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
          <span className="text-blue-400 text-sm">{resource.type}</span>
          <Link
            href={`/resources/${normalizeTitle(resource.title)}`}
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
