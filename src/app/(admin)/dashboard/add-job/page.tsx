"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddJobPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    type: "",
    location: "",
    experienceLevel: "",
    salaryRange: "",
    description: "",
    requirements: "",
    benefits: "",
    applicationDeadline: "",
    contactEmail: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const transformedData = {
        title: formData.title,
        department: formData.department,
        location: formData.location,
        // Fix type capitalization to match enum
        type:
          formData.type === "full-time"
            ? "Full-time"
            : formData.type === "part-time"
              ? "Part-time"
              : formData.type === "contract"
                ? "Contract"
                : formData.type === "internship"
                  ? "Internship"
                  : formData.type,
        description: formData.description,
        // Convert requirements string to array
        requirements: formData.requirements ? formData.requirements.split("\n").filter((req) => req.trim()) : [],
        // Convert benefits to responsibilities array (since API expects responsibilities)
        responsibilities: formData.benefits ? formData.benefits.split("\n").filter((resp) => resp.trim()) : [],
        salaryRange: formData.salaryRange,
        // Convert date to ISO datetime
        applicationDeadline: formData.applicationDeadline
          ? new Date(formData.applicationDeadline + "T23:59:59").toISOString()
          : undefined,
        // Fix field name mapping
        applicationEmail: formData.contactEmail,
        // Fix experience level to match enum
        experienceLevel:
          formData.experienceLevel === "entry"
            ? "Entry Level"
            : formData.experienceLevel === "mid"
              ? "Mid Level"
              : formData.experienceLevel === "senior"
                ? "Senior Level"
                : formData.experienceLevel === "lead"
                  ? "Executive"
                  : "Mid Level",
        isActive: true,
      }

      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      })

      if (!response.ok) {
        const error = await response.json()
        console.log("[v0] API Error:", error) // Debug log
        throw new Error(error.message || "Failed to create job post")
      }

      // const result = await response.json()


      // Reset form
      setFormData({
        title: "",
        department: "",
        type: "",
        location: "",
        experienceLevel: "",
        salaryRange: "",
        description: "",
        requirements: "",
        benefits: "",
        applicationDeadline: "",
        contactEmail: "",
      })
    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }

  const handleClearForm = () => {
    setFormData({
      title: "",
      department: "",
      type: "",
      location: "",
      experienceLevel: "",
      salaryRange: "",
      description: "",
      requirements: "",
      benefits: "",
      applicationDeadline: "",
      contactEmail: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-gray-900">CODEZYN</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Our Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Members
            </a>
            <a href="/careers" className="text-gray-600 hover:text-gray-900">
              Careers
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Request a Demo</Button>
          </nav>
        </div>
      </header> */}

      <div className="flex">
        {/* Sidebar */}
        {/* <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Dashboard</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                Overview
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                Add Member
              </a>
              <a href="#" className="block px-3 py-2 text-gray-900 bg-gray-100 rounded-md font-medium">
                Add Job Post
              </a>
            </nav>
          </div>
        </aside> */}

        {/* Main Content */}
        <main className="">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Add New Job Post</h1>
            <p className="text-gray-600 mb-8">Create a new job posting for your company</p>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8 space-y-8">
              {/* Job Information Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Job Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700">
                      Job Title *
                    </Label>
                    <Input
                      id="jobTitle"
                      placeholder="Senior Software Engineer"
                      className="mt-1"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department
                    </Label>
                    <Input
                      id="department"
                      placeholder="Engineering, Marketing, Sales..."
                      className="mt-1"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobType" className="text-sm font-medium text-gray-700">
                      Job Type
                    </Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full Time</SelectItem>
                        <SelectItem value="part-time">Part Time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="Dhaka, Bangladesh"
                      className="mt-1"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                      Experience Level
                    </Label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) => handleInputChange("experienceLevel", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="lead">Lead/Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="salary" className="text-sm font-medium text-gray-700">
                      Salary Range
                    </Label>
                    <Input
                      id="salary"
                      placeholder="50,000 - 80,000 BDT"
                      className="mt-1"
                      value={formData.salaryRange}
                      onChange={(e) => handleInputChange("salaryRange", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Job Details Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Job Details</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="jobDescription" className="text-sm font-medium text-gray-700">
                      Job Description *
                    </Label>
                    <Textarea
                      id="jobDescription"
                      placeholder="Provide a detailed description of the role, responsibilities, and what the candidate will be working on..."
                      className="mt-1 min-h-32"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="requirements" className="text-sm font-medium text-gray-700">
                      Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      placeholder="List the required skills, qualifications, and experience needed for this position..."
                      className="mt-1 min-h-32"
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="benefits" className="text-sm font-medium text-gray-700">
                      Benefits & Perks
                    </Label>
                    <Textarea
                      id="benefits"
                      placeholder="Describe the benefits, perks, and what makes this opportunity attractive..."
                      className="mt-1 min-h-24"
                      value={formData.benefits}
                      onChange={(e) => handleInputChange("benefits", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Application Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="applicationDeadline" className="text-sm font-medium text-gray-700">
                      Application Deadline
                    </Label>
                    <Input
                      id="applicationDeadline"
                      type="date"
                      className="mt-1"
                      value={formData.applicationDeadline}
                      onChange={(e) => handleInputChange("applicationDeadline", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail" className="text-sm font-medium text-gray-700">
                      Contact Email *
                    </Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="hr@codezyne.com"
                      className="mt-1"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <Button variant="outline" type="button" onClick={handleClearForm} disabled={isLoading}>
                  Clear Form
                </Button>
                <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white" disabled={isLoading}>
                  {isLoading ? "Creating..." : "Create Job Post"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
