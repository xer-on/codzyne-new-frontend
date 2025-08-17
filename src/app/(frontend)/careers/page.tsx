"use client"

import { useState, useEffect } from "react"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface JobPost {
  _id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  responsibilities: string[]
  salaryRange: string
  applicationDeadline: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function CareersPage() {
  const [jobOpenings, setJobOpenings] = useState<JobPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs")
        if (!response.ok) {
          throw new Error("Failed to fetch jobs")
        }
        const data = await response.json();
    
        setJobOpenings(data?.data?.filter((job: JobPost) => job.isActive))
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // const benefits = [
  //   {
  //     title: "Competitive Salary",
  //     description: "Industry-leading compensation packages with performance bonuses",
  //   },
  //   {
  //     title: "Health Insurance",
  //     description: "Comprehensive medical coverage for you and your family",
  //   },
  //   {
  //     title: "Flexible Work",
  //     description: "Hybrid work options with flexible hours to maintain work-life balance",
  //   },
  //   {
  //     title: "Learning & Development",
  //     description: "Continuous learning opportunities and professional development programs",
  //   },
  //   {
  //     title: "Modern Office",
  //     description: "State-of-the-art office space with latest technology and amenities",
  //   },
  //   {
  //     title: "Team Events",
  //     description: "Regular team building activities and company-wide celebrations",
  //   },
  // ]

  return (
    <div className=" bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                <span className="text-purple-600">Code</span>
                <span className="text-purple-800">Zyne</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600">
                Our Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600">
                Members
              </Link>
              <Link href="/careers" className="text-purple-600 font-semibold">
                Careers
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600">
                Contact
              </Link>
            </nav>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Request a Demo</Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="bg-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Join Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be part of a dynamic team that's revolutionizing laboratory management systems. We're looking for passionate
            individuals who want to make a difference in healthcare technology.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">View Open Positions</Button>
        </div>
      </section> */}

      {/* Why Join Us Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold mb-2">WHY CHOOSE CODEZYNE</p>
            <h2 className="text-4xl font-bold text-gray-900">Why Work With Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At CodeZyne, we believe in fostering innovation, supporting growth, and creating an environment where
              talented individuals can thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold mb-2">CURRENT OPPORTUNITIES</p>
            <h2 className="text-4xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-gray-600 mt-4">
              Explore our current job openings and find the perfect role for your career growth.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading job openings...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Error loading job openings: {error}</p>
              <Button onClick={() => window.location.reload()} className="bg-purple-600 hover:bg-purple-700">
                Try Again
              </Button>
            </div>
          ) : jobOpenings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No job openings available at the moment.</p>
              <p className="text-gray-500 mt-2">Please check back later for new opportunities.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job._id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{job.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <span className="text-gray-600">{job.location}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-600">{job.type}</span>
                          {job.salaryRange && (
                            <>
                              <span className="text-gray-600">•</span>
                              <span className="text-gray-600">{job.salaryRange}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 mb-4 text-base">{job.description}</CardDescription>

                    {job.responsibilities && job.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.applicationDeadline && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                          Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>



    </div>
  )
}
