import Link from "next/link"
import { CalendarIcon, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  post: {
    id: string
    title: string
    summary: string
    image: string
    category: string
    date: string
    author: string
  }
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
      </div>

      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2 gap-3">
          <div className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {post.author}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">{post.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>

        <Link
          href={`/post/${post.id}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}
