"use client";

import React, { useState } from 'react';
import { SidebarSectionTitle } from './SidebarSectionTitle';

interface Item {
  category: string;
}

interface CategoriesWidgetProps<T extends Item> {
  items: T[];
  title: string;
}

export const CategoriesWidget = <T extends Item>({ items, title }: CategoriesWidgetProps<T>) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category]++;
      return acc;
    }, {} as Record<string, number>
  );

  return (
    <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
      <SidebarSectionTitle title={title} />
      <ul className="flex flex-col gap-3">
        <li className={`flex justify-between items-center cursor-pointer group ${!selectedCategory ? 'text-prim' : ''}`} onClick={() => setSelectedCategory(null)}>
          <span className="group-hover:text-prim transition-colors duration-300">Todas las Categorías</span>
          <span>({items.length})</span>
        </li>
        {Object.entries(categories).map(([category, count]) => (
          <li key={category} className={`flex justify-between items-center cursor-pointer group ${selectedCategory === category ? 'text-prim' : ''}`} onClick={() => setSelectedCategory(category)}>
            <span className="group-hover:text-prim transition-colors duration-300">{category}</span>
            <span>({count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};