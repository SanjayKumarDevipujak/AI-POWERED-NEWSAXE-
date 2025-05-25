"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, PlusCircle, TrendingUp, Clock, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AdminSidebar from "@/components/admin/admin-sidebar"
import StatsCards from "@/components/admin/stats-cards"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for demonstration
  const recentPosts = [
    {
      id: "1",
      title: "AI Revolution in Healthcare: New Breakthroughs Promise Better Outcomes",
      status: "Published",
      date: "May 24, 2025",
      views: 1243,
    },
    {
      id: "2",
      title: "Global Markets React to New Economic Policies",
      status: "Published",
      date: "May 23, 2025",
      views: 876,
    },
    {
      id: "3",
      title: "The Future of Remote Work: Trends and Predictions",
      status: "Draft",
      date: "May 22, 2025",
      views: 0,
    },
    {
      id: "4",
      title: "Sustainable Living: Small Changes with Big Impact",
      status: "Scheduled",
      date: "May 26, 2025",
      views: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <Link href="/admin/editor">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                Popular Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                      <p className="text-xs text-gray-500">{post.views} views</p>
                    </div>
                    <Link href={`/admin/editor/${post.id}`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            post.status === "Published"
                              ? "bg-green-500"
                              : post.status === "Draft"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          }`}
                        ></span>
                        {post.status} • {post.date}
                      </div>
                    </div>
                    <Link href={`/admin/editor/${post.id}`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Bot className="mr-2 h-5 w-5 text-blue-600" />
                AI-Generated Content Ideas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "The Impact of AI on Modern Journalism",
                  "5 Emerging Tech Trends to Watch in 2025",
                  "How Climate Change is Affecting Global Food Security",
                  "The Rise of Digital Nomads: Changing Work Culture",
                  "Cryptocurrency: Investment Opportunity or Bubble?",
                  "Mental Health in the Digital Age: Challenges and Solutions",
                ].map((idea, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="text-sm text-gray-800">{idea}</p>
                    <div className="mt-2 flex justify-end">
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-600">
                        Generate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
