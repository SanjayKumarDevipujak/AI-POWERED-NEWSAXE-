"use client"

import { useState } from "react"
import { Bot, Sparkles, Copy, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AiGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        "Artificial intelligence is revolutionizing healthcare in ways that were once considered science fiction. From early disease detection to personalized treatment plans, AI tools are becoming indispensable for medical professionals worldwide.\n\nOne of the most promising applications of AI in healthcare is early disease detection. Machine learning algorithms can analyze medical images with remarkable accuracy, often identifying subtle signs of disease that human eyes might miss.\n\nA recent study published in the Journal of Medical AI demonstrated that an AI system detected early-stage lung cancer with 94% accuracy, compared to 72% accuracy achieved by experienced radiologists.",
      )
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const templates = [
    { name: "News Article", description: "Generate a factual news article on a specific topic" },
    { name: "Blog Post", description: "Create an engaging blog post with sections and headings" },
    { name: "Product Review", description: "Write a detailed review of a product or service" },
    { name: "Opinion Piece", description: "Generate an opinion article on a controversial topic" },
    { name: "Tutorial", description: "Create a step-by-step guide on how to do something" },
    { name: "Interview", description: "Generate a Q&A style interview on a specific topic" },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="generator">Content Generator</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <Bot className="mr-2 h-5 w-5 text-blue-600" />
                AI Content Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                  <Input placeholder="Enter the main topic or title" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">News Article</SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="opinion">Opinion</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prompt</label>
                <Textarea
                  placeholder="Describe what you want the AI to write about in detail..."
                  className="min-h-[150px]"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (~300 words)</SelectItem>
                      <SelectItem value="medium">Medium (~600 words)</SelectItem>
                      <SelectItem value="long">Long (~1000 words)</SelectItem>
                      <SelectItem value="very-long">Very Long (~1500 words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="youth">Youth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset</Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
              >
                {isGenerating ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {generatedContent && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center justify-between">
                  <span>Generated Content</span>
                  <Button variant="ghost" size="sm" onClick={handleCopy} className="text-gray-500 hover:text-gray-700">
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-line">{generatedContent}</div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Open in Editor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md font-medium">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
