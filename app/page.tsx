import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import FeaturedNews from "@/components/home/featured-news"
import NewsCard from "@/components/home/news-card"
import Sidebar from "@/components/home/sidebar"
import CategoryFilters from "@/components/home/category-filters"

export default function HomePage() {
  // Mock data for demonstration
  const featuredPost = {
    id: "1",
    title: "AI Revolution in Healthcare: New Breakthroughs Promise Better Outcomes",
    summary:
      "Recent advancements in artificial intelligence are transforming how doctors diagnose and treat patients, with new studies showing significant improvements in early detection rates.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Tech",
    date: "May 24, 2025",
    author: "Sarah Johnson",
  }

  const latestPosts = [
    {
      id: "2",
      title: "Global Markets React to New Economic Policies",
      summary:
        "Stock markets worldwide showed mixed reactions as new fiscal policies were announced by major economies.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Business",
      date: "May 23, 2025",
      author: "Michael Chen",
    },
    {
      id: "3",
      title: "New Streaming Platform Challenges Industry Giants",
      summary: "A startup streaming service is gaining traction with innovative features and exclusive content deals.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Entertainment",
      date: "May 23, 2025",
      author: "Jessica Williams",
    },
    {
      id: "4",
      title: "Breakthrough in Quantum Computing Announced",
      summary:
        "Scientists have achieved a major milestone in quantum computing that could revolutionize data processing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Science",
      date: "May 22, 2025",
      author: "Dr. Robert Lee",
    },
    {
      id: "5",
      title: "Championship Finals Set After Dramatic Semifinals",
      summary: "The stage is set for an epic championship showdown following two thrilling semifinal matches.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sports",
      date: "May 22, 2025",
      author: "James Rodriguez",
    },
    {
      id: "6",
      title: "Climate Summit Reaches Historic Agreement",
      summary: "World leaders have committed to ambitious new climate goals at the latest international summit.",
      image: "/placeholder.svg?height=400&width=600",
      category: "World",
      date: "May 21, 2025",
      author: "Emma Thompson",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <FeaturedNews post={featuredPost} />

        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <CategoryFilters />

            <h2 className="text-2xl font-bold mt-8 mb-6">Latest News</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="#"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Load More
              </Link>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}
