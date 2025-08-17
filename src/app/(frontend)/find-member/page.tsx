"use client"

import type React from "react"

import { useState } from "react"
import { Search, UserIcon, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  userId: string
  name: string
  role: string
  bio: string
  email: string
  avatarUrl?: string
}

export default function TeamMemberSearch() {
  const [searchId, setSearchId] = useState("")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [searchError, setSearchError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setSearchError("")
    setIsLoading(true)

    if (!searchId.trim()) {
      setSearchError("Please enter a team member ID")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(`/api/members/${searchId}`)
      const data = await response.json();


      if (data.success) {
        setSelectedMember(data.data)
      } else {
        setSelectedMember(null)
        setSearchError(data.error || "Team member not found. Please check the ID and try again.")
      }
    } catch (error) {
      console.error("Search error:", error)
      setSelectedMember(null)
      setSearchError("An error occurred while searching. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const clearSearch = () => {
    setSearchId("")
    setSelectedMember(null)
    setSearchError("")
  }

  const sampleIds = ["TM001", "TM002", "TM003"]

  const handleSampleIdClick = async (id: string) => {
    setSearchId(id)
    setSearchError("")
    setIsLoading(true)

    try {
      const response = await fetch(`/api/members/${id}`);
      console.log('response', response);

      const data = await response.json()

      if (response.ok) {
        setSelectedMember(data.user)
      } else {
        setSelectedMember(null)
        setSearchError(data.error || "Team member not found.")
      }
    } catch (error) {
      console.error("Search error:", error)
      setSelectedMember(null)
      setSearchError("An error occurred while searching.")
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div className="min-h-screen bg-background flex justify-center items-center">


      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                Find Team Member
              </CardTitle>
              <CardDescription>Enter a team member ID to view their profile and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter team member ID (e.g., TM001)"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="text-lg py-3"
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" size="lg" className="px-8" disabled={isLoading}>
                  <Search className="h-4 w-4 mr-2" />
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </form>

              {searchError && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive text-sm">{searchError}</p>
                </div>
              )}

              {searchId && (
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" onClick={clearSearch} disabled={isLoading}>
                    Clear Search
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Profile Display */}
        {selectedMember && (
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage src={selectedMember.avatarUrl || "/placeholder.svg"} alt={selectedMember.name} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {selectedMember.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center md:text-left flex-1">
                    <CardTitle className="text-3xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {selectedMember.name}
                    </CardTitle>
                    <CardDescription className="text-lg mb-3">{selectedMember.role}</CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="secondary" className="text-sm">
                        ID: {selectedMember.userId}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h3
                      className="text-xl font-semibold mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <UserIcon className="h-5 w-5 text-primary" />
                      Contact Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${selectedMember.email}`} className="text-primary hover:underline">
                          {selectedMember.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div>
                    <h3
                      className="text-xl font-semibold mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      About {selectedMember.name.split(" ")[0]}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button asChild>
                    <a href={`mailto:${selectedMember.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sample IDs for testing */}
        {/* <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                Sample Team Member IDs
              </CardTitle>
              <CardDescription>Try searching with these sample IDs to explore the functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {sampleIds.map((id) => (
                  <Button
                    key={id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleIdClick(id)}
                    disabled={isLoading}
                  >
                    {id}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}
      </main>
    </div>
  )
}
