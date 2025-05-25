"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CategoryFilters() {
  const categories = ["All", "Tech", "Business", "Entertainment", "Science", "Sports", "World"]
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={`rounded-full ${
              activeCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
