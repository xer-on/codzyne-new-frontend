"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { IClient } from "./clients"

interface ClientShowcaseProps {
  clients: IClient[]
}

export function ClientShowcase({ clients }: ClientShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b to-muted/20">
      <div className=" mx-auto">
        {/* Header with Navigation Buttons */}
        <div className="flex justify-between items-start mb-12">
          <div className="text-center flex-1">
           
          </div>

          <div className="flex gap-2 ml-8">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-emerald-50 hover:border-emerald-200 shadow-lg"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-emerald-50 hover:border-emerald-200 shadow-lg"
              onClick={scrollRight}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          {/* Scrollable Client Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {clients.map((client, index) => (
              <Card
                key={client.companyName}
                className="group relative p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 hover:border-emerald-200 flex-shrink-0 w-40"
           
              >
                {/* Premium Badge */}
                {client.clientType === "Premium" && (
                  <Badge className="absolute -top-2 -right-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                    Premium
                  </Badge>
                )}

                {/* Logo Container */}
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-emerald-200/50 transition-shadow duration-300">
                    <img
                      src={client.logoUrl || "/placeholder.svg"}
                      alt={`${client.companyName} logo`}
                      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=32&width=32&query=${encodeURIComponent(client.companyName + " logo")}`
                      }}
                    />
                  </div>
                </div>

                {/* Company Name Only */}
                <div className="text-center">
                  <h3 className="text-sm font-bold text-foreground font-sans group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                    {client.companyName}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-sans">Join our growing network of satisfied clients</p>
        </div>
      </div>
    </section>
  )
}
