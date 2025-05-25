import Link from "next/link"
import { CalendarIcon, User, Clock, Tag, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Sidebar from "@/components/home/sidebar"

export default function PostPage({ params }: { params: { slug: string } }) {
  // Mock data for demonstration
  const post = {
    id: params.slug,
    title: "AI Revolution in Healthcare: New Breakthroughs Promise Better Outcomes",
    summary:
      "Recent advancements in artificial intelligence are transforming how doctors diagnose and treat patients, with new studies showing significant improvements in early detection rates.",
    content: `
      <p>Artificial intelligence is revolutionizing healthcare in ways that were once considered science fiction. From early disease detection to personalized treatment plans, AI tools are becoming indispensable for medical professionals worldwide.</p>
      
      <h2>Early Disease Detection</h2>
      <p>One of the most promising applications of AI in healthcare is early disease detection. Machine learning algorithms can analyze medical images with remarkable accuracy, often identifying subtle signs of disease that human eyes might miss.</p>
      <p>A recent study published in the Journal of Medical AI demonstrated that an AI system detected early-stage lung cancer with 94% accuracy, compared to 72% accuracy achieved by experienced radiologists.</p>
      
      <h2>Personalized Treatment Plans</h2>
      <p>AI is also transforming how treatments are designed for individual patients. By analyzing vast amounts of patient data, AI systems can help doctors create highly personalized treatment plans that consider a patient's unique genetic makeup, medical history, and lifestyle factors.</p>
      <p>"We're moving away from the one-size-fits-all approach to medicine," explains Dr. Sarah Chen, a leading researcher in AI healthcare applications. "With AI, we can tailor treatments to each patient's specific needs, which significantly improves outcomes."</p>
      
      <h2>Challenges and Concerns</h2>
      <p>Despite the promising advancements, the integration of AI in healthcare faces several challenges. Privacy concerns, the need for regulatory frameworks, and questions about the explainability of AI decisions are among the issues that need to be addressed.</p>
      <p>Additionally, there's the challenge of ensuring that healthcare professionals are properly trained to work alongside AI systems. "AI should augment human expertise, not replace it," emphasizes Dr. Michael Johnson, a medical ethics specialist.</p>
      
      <h2>The Future of AI in Healthcare</h2>
      <p>Looking ahead, experts predict that AI will continue to transform healthcare in increasingly sophisticated ways. From AI-powered surgical robots to virtual health assistants, the possibilities seem endless.</p>
      <p>As these technologies mature, they promise to make healthcare more accessible, efficient, and effective for patients around the world.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Tech",
    date: "May 24, 2025",
    author: "Sarah Johnson",
    readTime: "6 min read",
    tags: ["AI", "Healthcare", "Technology", "Medicine"],
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <article className="w-full md:w-3/4 bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-80 object-cover" />

            <div className="p-6 md:p-8">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">{post.category}</Badge>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">Staff Writer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-500">Share</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}
