"use client"

import { useState } from "react"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  ImageIcon,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Quote,
  Code,
  Undo,
  Redo,
  Calendar,
  Tag,
  Save,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AiGenerator from "@/components/admin/ai-generator"

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState("editor")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar activeTab="editor" setActiveTab={setActiveTab} />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Blog Editor</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" />
              Publish
            </Button>
          </div>
        </div>

        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="ai-generator">AI Generator</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Post Title"
                      className="text-xl font-bold border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="w-full md:w-1/3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Tech</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="world">World</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full md:w-1/3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                      <div className="flex items-center">
                        <Input placeholder="Add tags separated by commas" />
                        <Button variant="ghost" size="icon" className="ml-2">
                          <Tag className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="w-full md:w-1/3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Schedule</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Calendar className="mr-2 h-4 w-4" />
                            {selectedDate ? selectedDate.toDateString() : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap gap-1">
                  <Button variant="ghost" size="icon" title="Bold">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Italic">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Heading 1">
                    <Heading1 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Heading 2">
                    <Heading2 className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Bulleted List">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Numbered List">
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Insert Image">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Insert Link">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Align Left">
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Align Center">
                    <AlignCenter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Align Right">
                    <AlignRight className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Quote">
                    <Quote className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Code">
                    <Code className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button variant="ghost" size="icon" title="Undo">
                    <Undo className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Redo">
                    <Redo className="h-4 w-4" />
                  </Button>
                </div>

                <Textarea
                  placeholder="Start writing your blog post here..."
                  className="min-h-[500px] border-none rounded-none p-6 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Featured Image</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Drag and drop an image here, or click to select a file</p>
                  <Button variant="outline" className="mt-4">
                    Upload Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-generator">
            <AiGenerator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
