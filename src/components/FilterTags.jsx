// components/FilterTags.js
'use client';
import React, { useState } from 'react';

const tagColors = {
  All: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' },
  Development: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  Design: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
  Resources: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
  Community: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  AITool: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  Collaboration: { bg: 'bg-teal-100', text: 'text-teal-800', border: 'border-teal-300' },
};

export default function FilterTags({ onTagChange }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Development', 'Design', 'Resources', 'Community', 'Collaboration', "AITool"];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    onTagChange(tag);
  };

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {tags.map(tag => {
        const isSelected = selectedTag === tag;
        const { bg, text, border } = tagColors[tag];
        return (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`
              px-4 py-2 rounded-full border transition-transform duration-300 ease-in-out
              ${isSelected 
                ? `${bg} ${text} ${border} shadow-lg font-semibold transform scale-105` 
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
