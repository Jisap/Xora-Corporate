"use client";

import React, { useState } from 'react';
import { SidebarSectionTitle } from './SidebarSectionTitle';
import { useRouter } from 'next/navigation';

export const SearchWidget = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="shadow-lg border border-gray-100 bg-white p-5 rounded-xl">
      <SidebarSectionTitle title="Search Here" />
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Here"
          className="p-3 border-border w-full rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};