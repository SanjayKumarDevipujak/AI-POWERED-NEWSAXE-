"use client"

import Link from "next/link"
import { LayoutDashboard, FileText, Edit, Calendar, Settings, LogOut, Bot } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      id: "posts",
      label: "All Posts",
      icon: FileText,
      href: "/admin/posts",
    },
    {
      id: "editor",
      label: "Editor",
      icon: Edit,
      href: "/admin/editor",
    },
    {
      id: "ai-generator",
      label: "AI Generator",
      icon: Bot,
      href: "/admin/ai-generator",
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: Calendar,
      href: "/admin/schedule",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ]

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">
            News<span className="text-gray-800">Axe</span>
          </span>
          <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">Admin</span>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2.5 rounded-md text-sm ${
                  activeTab === item.id ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <Link href="/" className="flex items-center px-4 py-2.5 rounded-md text-sm text-gray-700 hover:bg-gray-100">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Link>
      </div>
    </aside>
  )
}
