import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { resources } from "@/lib/resourceData"; // Adjust this path as needed

const normalizeString = (str) => str.replace(/\s+/g, '-').toLowerCase();

const ResourceDetailPage = ({ params }) => {
  // Ensure params.id matches the resource title, which should be a string
  const normalizedParamsId = normalizeString(params.id);

  // Find the resource by comparing normalized strings
  const resource = resources.find(
    (r) => normalizeString(r.title) === normalizedParamsId
  );

  if (!resource)
    return (
      <div className="h-screen w-full flex justify-center items-center bg-black text-white">
        <div className="text-3xl font-bold">Resource not found</div>
      </div>
    );


  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link
        href="/resources"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-2xl  bg-gray-800  flex justify-center items-center">
          <Image
            src={resource.image}
            alt={resource.title}
            height={500}
            width={500}
            objectFit="cover"
            className=" rounded-3xl"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{resource.title}</h1>

          <p className="text-gray-300 text-lg">{resource.description}</p>

          <Link
            href={resource.link}
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white rounded-full px-6 py-3 font-semibold transition-colors"
          >
            View Source →
          </Link>

          <div className="pt-8 border-t border-gray-700 space-y-4">
            <div>
              <h2 className="text-gray-400 text-sm uppercase">Category</h2>
              <p className="text-white">{resource.type}</p>
            </div>

            <div>
              <h2 className="text-gray-400 text-sm uppercase">Tags</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailPage;
