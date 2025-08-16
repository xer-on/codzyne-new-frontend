"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filters, MessageStats } from "@/app/(admin)/dashboard/messages/page"


interface ContactMessagesFiltersProps {
  filters: Filters
  setFilters: (filters: Filters) => void
  stats: MessageStats
  total: number
}

export function ContactMessagesFilters({ filters, setFilters, total }: ContactMessagesFiltersProps) {
  const handleStatusFilter = (status: string) => {
    setFilters({ ...filters, status, page: 1 })
  }

  // const handleSortChange = (sortBy: string) => {
  //   setFilters({ ...filters, sortBy, page: 1 })
  // }

  // const handleWebsiteChange = (website: string) => {
  //   setFilters({ ...filters, website, page: 1 })
  // }

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Status:</span>
          <Button
            variant={filters.status === "all" ? "default" : "ghost"}
            size="sm"
            onClick={() => handleStatusFilter("all")}
            className={filters.status === "all" ? "text-blue-600 bg-blue-50" : ""}
          >
            All Messages
            <Badge variant="secondary" className="ml-2">
              {total}
            </Badge>
          </Button>


        </div>
      </div>

      {/* <div className="flex items-center gap-3">
        <Select value={filters.sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="priority">High Priority</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.website} onValueChange={handleWebsiteChange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Websites</SelectItem>
            <SelectItem value="acme-corp.com">acme-corp.com</SelectItem>
            <SelectItem value="tech-solutions.com">tech-solutions.com</SelectItem>
            <SelectItem value="startup-hub.com">startup-hub.com</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
    </div>
  )
}
