import Link from "next/link"
import { CalendarIcon, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FeaturedNewsProps {
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

export default function FeaturedNews({ post }: FeaturedNewsProps) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative h-64 md:h-full">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{post.title}</h1>

          <p className="text-gray-600 mb-6">{post.summary}</p>

          <Link
            href={`/post/${post.id}`}
            className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit"
          >
            Read Full Story
          </Link>
        </div>
      </div>
    </div>
  )
}
