import Link from "next/link"
import { Tag } from "lucide-react"

export default function Sidebar() {
  // Mock data for demonstration
  const topStories = [
    {
      id: "7",
      title: "Tech Giant Unveils Revolutionary New Smartphone",
      date: "May 24, 2025",
    },
    {
      id: "8",
      title: "Major Breakthrough in Renewable Energy Storage",
      date: "May 23, 2025",
    },
    {
      id: "9",
      title: "Global Summit Addresses Climate Change Challenges",
      date: "May 23, 2025",
    },
    {
      id: "10",
      title: "New Study Reveals Benefits of Mediterranean Diet",
      date: "May 22, 2025",
    },
    {
      id: "11",
      title: "Space Agency Announces Plans for Mars Mission",
      date: "May 21, 2025",
    },
  ]

  const tags = [
    "Technology",
    "Politics",
    "Health",
    "Climate",
    "Economy",
    "Education",
    "Innovation",
    "Culture",
    "Science",
    "Finance",
  ]

  return (
    <aside className="w-full md:w-1/4 space-y-8">
      {/* Top Stories */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Top Stories</h3>
        <ul className="space-y-4">
          {topStories.map((story) => (
            <li key={story.id}>
              <Link href={`/post/${story.id}`} className="group">
                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {story.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{story.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2 flex items-center">
          <Tag className="h-4 w-4 mr-2" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Ad Space */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-xs text-gray-500 mb-2">Advertisement</h3>
        <div className="bg-gray-100 rounded-md h-60 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Ad Space</p>
        </div>
      </div>
    </aside>
  )
}
